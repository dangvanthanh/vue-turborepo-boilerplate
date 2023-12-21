import Cookies from 'js-cookie'

export interface CookieOptions {
	expires?: number | Date | undefined
	path?: string | undefined
	domain?: string | undefined
	secure?: boolean | undefined
	sameSite?: 'lax' | 'strict' | 'none' | undefined
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[property: string]: any
}

export default class CookiesAdapter {
	cookies

	constructor() {
		this.cookies = Cookies
	}

	get(key: string): string | undefined {
		return this.cookies.get(key)
	}

	getAll(): Record<string, string> {
		return this.cookies.get()
	}

	set(key: string, value: string, options?: CookieOptions): string | undefined {
		return this.cookies.set(key, value, options)
	}

	remove(key: string) {
		this.cookies.remove(key)
	}
}