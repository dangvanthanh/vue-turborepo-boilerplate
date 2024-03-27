import Cookies from 'js-cookie'

export type CookieOptions = {
	expires?: number | Date
	path?: string
	domain?: string
	secure?: boolean
	sameSite?: 'lax' | 'strict' | 'none'
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[property: string]: any
}

export class CookiesAdapter {
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