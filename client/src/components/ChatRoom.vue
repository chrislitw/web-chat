<script setup lang="ts">
import { ref } from 'vue'
import { useWebsocketStore } from '../stores/websocket'
import { useUserStore } from '@/stores/user'
import MessageBox from './MessageBox.vue'

const userStore = useUserStore()
const websocketStore = useWebsocketStore()
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

type Msg = {
  uid: string
  message: string
  photoURL: string
  time: string
}
</script>
<template>
  <div class="wrap">
    <div class="container">
      <div class="content overflow-y-auto">
        <div class="flex flex-col gap-3">
          <template
            v-for="(item, index) in websocketStore.messages as unknown as Msg[]"
            :key="index"
          >
            <MessageBox :msg="item"></MessageBox>
          </template>
        </div>
      </div>
      <form class="input-area shrink-0" @submit.prevent="handleEnter">
        <input
          type="text"
          class="h-full grow rounded border bg-gray-100 px-3"
          v-model="inputValue"
          required
        />
        <button type="submit" class="btn btn-blue">Send</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  @apply h-screen w-screen bg-white p-5;
}
.container {
  @apply m-auto flex h-full max-w-xl flex-col overflow-hidden rounded border;
}

.content {
  @apply w-full grow bg-[url('/bg.png')] p-2;
}

.input-area {
  @apply flex h-12 w-full items-center gap-2 border-t p-2;
}

.btn {
  @apply inline-flex h-full items-center rounded px-4;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-blue:focus {
  @apply outline outline-2  outline-offset-2 outline-cyan-500;
}
</style>
