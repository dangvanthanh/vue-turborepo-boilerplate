<script setup lang="ts">
import Music from '@/components/Music.vue'
import useSWRV from 'swrv'

async function fetchAllData() {
	try {
		const responses = await Promise.all([
			fetch('/listen'),
			fetch('/albums'),
			fetch('/playlists'),
		])

		responses.forEach((response, _) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
		})

		const [listenNowAlbums, madeForYouAlbums, playlists] = await Promise.all(
			responses.map((response) => response.json()),
		)

		return [listenNowAlbums, madeForYouAlbums, playlists]
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}

const { data } = useSWRV(
	() => 'collection',
	() => fetchAllData(),
)
</script>

<template>
	<div v-if="data">
		<Music :listenNowAlbums="data[0]" :madeForYouAlbums="data[1]" :playlists="data[2]" />
	</div>

</template>