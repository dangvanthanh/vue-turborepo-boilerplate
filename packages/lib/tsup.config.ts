import { type Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
	entry: ['src/index.ts'],
	format: ['esm'],
	dts: true,
	minify: true,
	...options,
}))