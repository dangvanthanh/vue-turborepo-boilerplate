import { lingui } from '@lingui/vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vueRouter(), vue(), macrosPlugin(), lingui()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
