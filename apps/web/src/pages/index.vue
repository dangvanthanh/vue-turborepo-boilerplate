<script setup lang="ts">
import Music from '@/components/Music.vue'
import type { Album } from '@/types'
import { type Ref, onMounted, ref } from 'vue'

const listenNowAlbums = ref<Album[]>([])
const madeForYouAlbums = ref<Album[]>([])
const playlists = ref<string[]>([])

onMounted(() => {
	fetchAllData()
})

async function fetchAllData() {
	await Promise.all([
		fetchData('/listen', listenNowAlbums),
		fetchData('/albums', madeForYouAlbums),
		fetchData('/playlists', playlists),
	])
}

async function fetchData<T>(url: string, targetRef: Ref<T>): Promise<void> {
	try {
		const res = await fetch(url)
		const json = await res.json()
		targetRef.value = json
	} catch (error) {
		console.error(`Error fetching data from ${url} ${error}`)
	}
}
</script>

<template>
  <Music :listenNowAlbums="listenNowAlbums" :madeForYouAlbums="madeForYouAlbums" :playlists="playlists" />
</template>