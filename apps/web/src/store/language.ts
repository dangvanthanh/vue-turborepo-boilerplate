import { enGB, fr, vi } from 'date-fns/locale'
import { defineStore } from 'pinia'

function getLanguageFromCode(languageCode: string) {
	switch (languageCode) {
		case 'en':
			return enGB
		case 'fr':
			return fr
		case 'vn':
			return vi
		default:
			return enGB
	}
}
export const useLanguageStore = defineStore('language', {
	state: () => ({
		language: {},
	}),
	getters: {
		getLanguage: (state) => state.language,
	},
	actions: {
		setLanguage(languageCode: string) {
			this.language = getLanguageFromCode(languageCode)
		},
	},
})
