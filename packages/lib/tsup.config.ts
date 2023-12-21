import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: true,
	external: [],
	splitting: false,
	minify: true,
	clean: true,
})
