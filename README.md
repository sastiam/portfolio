# sastiam.github.io

[![CI](https://github.com/sastiam/sastiam.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/sastiam/sastiam.github.io/actions/workflows/ci.yml)

Mi sitio personal, publicado en <https://sastiam.github.io/>.

## Por qué existe
Es mi portafolio de proyectos.

## Qué hay ahora
- `index.html`: la página, sin JavaScript.
- `costa-verde.svg`: dibujo propio de la Costa Verde de Lima vista desde el mar (28 KB), con tema claro y oscuro automático. Se usa como fondo decorativo, oculto a lectores de pantalla.

No se copió ni código ni ilustraciones de otros sitios.

## Verlo en local
```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Comprobaciones
```bash
python3 .github/scripts/check_site.py
```
Verifica que los SVG estén bien formados y pesen menos de 100 KB, que el HTML tenga idioma, título y `viewport`, que toda imagen declare `alt` y que no haya referencias locales rotas. El mismo chequeo corre en CI.

## Estado
En construcción. El contenido (proyectos, experiencia, certificados) llegará con límites y estado honestos.

## Seguridad
Para reportar una vulnerabilidad, ver [SECURITY.md](SECURITY.md). No abras un issue público.

## Contribuir
Ver [CONTRIBUTING.md](CONTRIBUTING.md).

## Licencia
[MIT](LICENSE).
