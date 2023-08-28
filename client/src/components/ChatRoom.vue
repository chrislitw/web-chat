<script setup lang="ts">
import { ref } from 'vue'
import { useWebsocketStore } from '../stores/websocket'
import { useUserStore } from '@/stores/user'
import MessageBox from './MessageBox.vue'

const userStore = useUserStore()
const websocketStore = useWebsocketStore()
const inputValue = ref('')

type Msg = {
  uid: string
  message: string
  photoURL: string
  time: string
}

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
  <div class="h-screen w-screen p-5">
    <div class="relative m-auto flex h-full max-w-xl flex-col overflow-hidden rounded border">
      <div class="flex h-12 w-full shrink-0 items-center border-b p-2">
        在線人數: {{ websocketStore.size }}
      </div>

      <div class="w-full grow overflow-y-auto bg-[url('/bg.png')] p-2">
        <div class="flex flex-col gap-3">
          <template
            v-for="(item, index) in websocketStore.messages as unknown as Msg[]"
            :key="index"
          >
            <MessageBox :msg="item"></MessageBox>
          </template>
        </div>
      </div>
      <form
        class="flex h-12 w-full shrink-0 items-center gap-2 border-t p-2"
        @submit.prevent="handleEnter"
      >
        <input
          type="text"
          class="h-full grow rounded border bg-gray-100 px-3"
          v-model="inputValue"
          required
        />
        <button
          type="submit"
          class="inline-flex h-full items-center rounded bg-blue-500 px-4 text-white hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
