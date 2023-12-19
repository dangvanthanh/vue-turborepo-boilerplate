<script setup lang="ts">
import { ref } from 'vue'
import { useMonitorSize } from '../composables'

defineProps<{ msg: string }>()

const sizes = useMonitorSize()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="sizes">
    <h2>Browser: {{ sizes.browserWidth }} pixels</h2>
    <span>-</span>
    <h2>Device: {{ sizes.deviceWidth }} pixels</h2>
  </div>
  <div class="card">
    <button type="button" @click="count++">Count is {{ count }}</button>
  </div>
</template>

<style scoped>
.sizes {
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-content: center;
}

.card {
  gap: 1.5rem;
}
</style>
