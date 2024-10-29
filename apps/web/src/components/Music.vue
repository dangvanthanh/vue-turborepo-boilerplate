<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Album } from '@/types'
import { PlusCircle as PlusCircledIcon } from 'lucide-vue-next'
import AlbumArtwork from './music/AlbumArtwork.vue'
import Menu from './music/Menu.vue'
import PodcastEmptyPlaceholder from './music/PodcastEmptyPlaceholder.vue'
import Sidebar from './music/Sidebar.vue'

interface MusicProps {
  listenNowAlbums: Album[]
  madeForYouAlbums: Album[]
  playlists: string[]
}

const { listenNowAlbums, madeForYouAlbums, playlists } =
  defineProps<MusicProps>()
</script>

<template>
  <div class="flex flex-col h-screen">
    <Menu />
    <div class="border-t">
      <div class="bg-background">
        <div class="grid lg:grid-cols-5">
          <ScrollArea class="lg:h-[calc(100vh-41px)]">
            <Sidebar :playlists="playlists" class="hidden lg:block" />
          </ScrollArea>
          <ScrollArea class="col-span-3 lg:col-span-4 lg:border-l h-[calc(100vh-41px)]">
            <div class="px-4 py-6 lg:px-8">
              <Tabs default-value="music" class="h-full space-y-6">
                <div class="space-between flex items-center">
                  <TabsList>
                    <TabsTrigger value="music" class="relative">
                      Music
                    </TabsTrigger>
                    <TabsTrigger value="podcasts"> Podcasts </TabsTrigger>
                    <TabsTrigger value="live" disabled> Live </TabsTrigger>
                  </TabsList>
                  <div class="ml-auto mr-4">
                    <Button>
                      <PlusCircledIcon class="mr-2 h-4 w-4" />
                      Add music
                    </Button>
                  </div>
                </div>
                <TabsContent value="music" class="border-none p-0 outline-none">
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Listen Now
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Top picks for you. Updated daily.
                      </p>
                    </div>
                  </div>
                  <Separator class="my-4" />
                  <div class="relative">
                    <ScrollArea>
                      <div class="flex space-x-4 pb-4">
                        <AlbumArtwork v-for="album in listenNowAlbums" :key="album.name" :album="album"
                          :playlists="playlists" class="w-[250px]" aspect-ratio="portrait" :width="250" :height="330" />
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                  <div class="mt-6 space-y-1">
                    <h2 class="text-2xl font-semibold tracking-tight">
                      Made for You
                    </h2>
                    <p class="text-sm text-muted-foreground">
                      Your personal playlists. Updated daily.
                    </p>
                  </div>
                  <Separator class="my-4" />
                  <div class="relative">
                    <ScrollArea>
                      <div class="flex space-x-4 pb-4">
                        <AlbumArtwork v-for="album in madeForYouAlbums" :key="album.name" :album="album"
                          :playlists="playlists" class="w-[150px]" aspect-ratio="square" :width="150" :height="150" />
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="podcasts" class="h-full flex-col border-none p-0 data-[state=active]:flex">
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        New Episodes
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Your favorite podcasts. Updated daily.
                      </p>
                    </div>
                  </div>
                  <Separator class="my-4" />
                  <PodcastEmptyPlaceholder />
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  </div>
</template>
