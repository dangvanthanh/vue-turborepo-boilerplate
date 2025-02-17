import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono()

app
	.use('*', logger())
	.use('*', prettyJSON())
	.use('*', cors())
	.get('/listen', (c) => {
		return c.json([
			{
				name: 'React Rendezvous',
				artist: 'Ethan Byte',
				cover:
					'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
			},
			{
				name: 'Async Awakenings',
				artist: 'Nina Netcode',
				cover:
					'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
			},
			{
				name: 'The Art of Reusability',
				artist: 'Lena Logic',
				cover:
					'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80',
			},
			{
				name: 'Stateful Symphony',
				artist: 'Beth Binary',
				cover:
					'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
			},
		])
	})
	.get('/albums', (c) => {
		return c.json([
			{
				name: 'Thinking Components',
				artist: 'Lena Logic',
				cover:
					'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
			},
			{
				name: 'Functional Fury',
				artist: 'Beth Binary',
				cover:
					'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
			},
			{
				name: 'React Rendezvous',
				artist: 'Ethan Byte',
				cover:
					'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
			},
			{
				name: 'Stateful Symphony',
				artist: 'Beth Binary',
				cover:
					'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
			},
			{
				name: 'Async Awakenings',
				artist: 'Nina Netcode',
				cover:
					'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
			},
			{
				name: 'The Art of Reusability',
				artist: 'Lena Logic',
				cover:
					'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
			},
		])
	})
	.get('/playlists', (c) => {
		return c.json([
			'Recently Added',
			'Recently Played',
			'Top Songs',
			'Top Albums',
			'Top Artists',
			'Logic Discography',
			'Bedtime Beats',
			'Feeling Happy',
			'I miss Y2K Pop',
			'Runtober',
			'Mellow Days',
			'Eminem Essentials',
		])
	})

Deno.serve({ port: 8787 }, app.fetch)
