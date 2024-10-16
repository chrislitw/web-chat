<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { useUserStore } from '@/stores/user'
import { useWebsocketStore } from '@/stores/websocket'
const websocketStore = useWebsocketStore()
const userStore = useUserStore()

const inputValue = ref('')

const handleEnter = () => {
  if (inputValue.value !== '') {
    const date = new Date()
    const time = date.toLocaleString('sv').split(' ')[1]
    const data = {
      action: 'message',
      msg: {
        uid: userStore.user.uid,
        photoURL: userStore.user.photoURL,
        message: inputValue.value,
        time
      }
    }
    websocketStore.sendmessageAction(data)
    inputValue.value = ''
  }
}
</script>
<template>
  <form
    class="flex h-16 w-full shrink-0 items-center gap-2 border-t p-2"
    @submit.prevent="handleEnter"
  >
    <input
      type="text"
      class="h-full grow rounded-md border bg-gray-100 px-3"
      v-model="inputValue"
      required
    />
    <button
      type="submit"
      class="inline-flex h-full items-center rounded-md bg-blue-500 px-4 text-white hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500"
    >
      Send
    </button>
  </form>
</template>
<style scoped></style>
