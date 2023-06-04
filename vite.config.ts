/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	const appEnvironment = String(process.env.VUE_APP_ENVIRONMENT).toLowerCase();

	return defineConfig({
		envPrefix: 'VUE',
		plugins: [
			vue(),

			createHtmlPlugin({
				minify: true,
				inject: {
					data: {
						title: 'Sastiam Portfolio',
						appEnvironment
					}
				}
			}),

			AutoImport({
				imports: ['vue', '@vueuse/core'],
				dts: 'src/auto-imports.d.ts'
			}),

			Components({
				extensions: ['vue'],
				include: [/\.vue$/, /\.vue\?vue/],
				dts: 'src/components.d.ts',
				resolvers: []
			}),

			Pages({
				dirs: [
					{ dir: 'src/pages', baseRoute: '' },
					{ dir: 'src/pages/blank', baseRoute: '' }
				],
				importMode(filepath, options) {
					return 'async'
				}
			}),

			Layouts()
		],
		resolve: {
			alias: {
				src: resolve(__dirname, 'src'),
				'~': resolve(__dirname, 'src'),
				assets: resolve(__dirname, 'src', 'assets'),
				'@components': resolve(__dirname, 'src/components/'),
				'@pages': resolve(__dirname, 'src/pages'),
				'@utils': resolve(__dirname, 'src/utils/index'),
				'@styles': resolve(__dirname, 'src/styles')
			}
		},
		build: {
			chunkSizeWarningLimit: 1024,
			assetsDir: 'portfolio-assets',
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes('/node_modules/')) {
							const modules = ['vue', '@vue'];
							const chunk = modules.find((module) => id.includes(`/node_modules/${module}`))

							return chunk ? `vendor-${chunk}` : 'vendor';
						}
					}
				}
			}
		},
		test: {
			environment: 'jsdom',
			include: ['__tests__/**/*.ts', '__tests__/**/*.{test, spec}.ts'],
			globals: true
		}
	});
}
