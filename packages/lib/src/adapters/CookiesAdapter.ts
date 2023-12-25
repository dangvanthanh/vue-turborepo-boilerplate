import Cookies from 'js-cookie'

export interface CookieOptions {
	expires?: number | Date
	path?: string
	domain?: string
	secure?: boolean
	sameSite?: 'lax' | 'strict' | 'none'
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
