#!/usr/bin/env python3
"""Comprobaciones mínimas del sitio estático. Sin dependencias: solo la biblioteca estándar.

Uso: python3 .github/scripts/check_site.py [RAIZ]
Sale con código 1 y lista cada problema si algo falla.
"""
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
MAX_SVG = 100_000   # presupuesto: cada SVG pesa como máximo 100 KB
MAX_HTML = 50_000   # presupuesto: cada página HTML pesa como máximo 50 KB
problems = []


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = self.viewport = self.title = False
        self.refs = []
        self.imgs_without_alt = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html" and a.get("lang"):
            self.lang = True
        if tag == "meta" and a.get("name") == "viewport":
            self.viewport = True
        if tag == "title":
            self.title = True
        if tag == "img" and "alt" not in a:
            self.imgs_without_alt += 1
        for key in ("src", "href"):
            if key in a and tag != "a":  # los enlaces externos y anclas no se comprueban
                self.refs.append(a[key])


for svg in ROOT.glob("*.svg"):
    try:
        ET.parse(svg)
    except ET.ParseError as e:
        problems.append(f"{svg.name}: XML mal formado ({e})")
    if svg.stat().st_size > MAX_SVG:
        problems.append(f"{svg.name}: pesa {svg.stat().st_size} B, máximo {MAX_SVG} B")

for html in ROOT.glob("*.html"):
    if html.stat().st_size > MAX_HTML:
        problems.append(f"{html.name}: pesa {html.stat().st_size} B, máximo {MAX_HTML} B")
    page = Page()
    page.feed(html.read_text(encoding="utf-8"))
    for ok, msg in ((page.lang, "falta lang en <html>"),
                    (page.viewport, "falta <meta name=\"viewport\">"),
                    (page.title, "falta <title>")):
        if not ok:
            problems.append(f"{html.name}: {msg}")
    if page.imgs_without_alt:
        problems.append(f"{html.name}: {page.imgs_without_alt} <img> sin atributo alt (usa alt=\"\" si es decorativa)")
    for ref in page.refs:
        if ref.startswith(("http:", "https:", "data:", "#", "mailto:", "//")):
            continue
        # "/x" significa "desde la raíz del sitio"; sin quitar la barra, Path ignoraría ROOT
        if not (ROOT / ref.split("#")[0].split("?")[0].lstrip("/")).exists():
            problems.append(f"{html.name}: referencia rota a '{ref}'")

if problems:
    print("Fallos del sitio:")
    for p in problems:
        print(f"  - {p}")
    sys.exit(1)
print("Sitio correcto: SVG bien formados, presupuesto de peso, HTML básico accesible y referencias locales.")
