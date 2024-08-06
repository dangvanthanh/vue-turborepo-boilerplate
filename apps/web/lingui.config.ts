// import babel from '@lingui/cli/api/extractors/babel'
import type { LinguiConfig } from '@lingui/conf'
import { vueExtractor } from '@lingui/extractor-vue'

const config: LinguiConfig = {
	locales: ['en', 'vi'],
	sourceLocale: 'en',
	catalogs: [
		{
			path: '<rootDir>/src/locales/{locale}',
			include: ['<rootDir>/src/'],
		},
	],
	extractors: [vueExtractor],
}

export default config
