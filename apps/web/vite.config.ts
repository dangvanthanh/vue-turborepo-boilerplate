import path from 'node:path'
import { lingui } from '@lingui/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import vueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vueRouter(), vue(), macrosPlugin(), lingui()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})