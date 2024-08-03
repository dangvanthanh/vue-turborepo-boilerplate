<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Music from './components/Music.vue'
import type { Album } from './types'

const listenNowAlbums = ref<Album[]>([])
const madeForYouAlbums = ref<Album[]>([])
const playlists = ref<string[]>([])

onMounted(() => {
	Promise.all([getListenNowAlbums(), getMadeForYouAlbums(), getPlaylists()])
})

async function getListenNowAlbums() {
	const res = await fetch('/listen')
	const json = await res.json()
	listenNowAlbums.value = json
}

async function getMadeForYouAlbums() {
	const res = await fetch('/albums')
	const json = await res.json()
	madeForYouAlbums.value = json
}

async function getPlaylists() {
	const res = await fetch('/playlists')
	const json = await res.json()
	playlists.value = json
}
</script>

<template>
  <Music :listenNowAlbums="listenNowAlbums" :madeForYouAlbums="madeForYouAlbums" :playlists="playlists" />
</template>

<style scoped></style>