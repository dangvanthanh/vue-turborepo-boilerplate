<script setup lang="ts">
import { useMonitorSize } from '../composables'
import { useCounterStore } from '../store'

defineProps<{ msg: string }>()

const sizes = useMonitorSize()
const store = useCounterStore()
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="sizes">
    <h2>Browser: {{ sizes.browserWidth }} pixels</h2>
    <span>-</span>
    <h2>Device: {{ sizes.deviceWidth }} pixels</h2>
  </div>
  <div class="card">
    <p>Counter is {{ store.count }} - Double is {{ store.doubleCount }}</p>
    <button type="button" @click="store.increment()">Increment</button>
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
