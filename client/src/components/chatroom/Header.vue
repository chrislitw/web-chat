<script setup lang="ts">
import { useWebsocketStore } from '@/stores/websocket'
// import { useDark, useToggle } from '@vueuse/core'
const websocketStore = useWebsocketStore()

// const isDark = useDark()
// const toggleDark = useToggle(isDark)
</script>
<template>
  <div class="flex h-12 w-full shrink-0 items-center border-b p-2">
    <span>在線人數: {{ websocketStore.size }}</span>
    <!-- <button @click="toggleDark()">click</button> -->
  </div>
</template>
<style scoped></style>
