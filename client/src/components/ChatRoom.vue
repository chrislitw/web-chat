<script setup lang="ts">
import { ref } from 'vue'
import { useWebsocketStore } from '../stores/websocket'

import MessageBox from './MessageBox.vue'

const websocketStore = useWebsocketStore()

// import WebSocketClient from '@/websocket-client'

// const aaa = (message: string) => {
//   console.log('hello world')
//   messages.value.push(message)
// }

// const handleConnect = () => {
//   window.ws = new WebSocketClient(aaa)
// }

const handleEnter = () => {
  const data = { action: 'message', message: inputValue.value }
  websocketStore.sendmessageAction(data)
  // window.ws.sendmessageAction(data)
}

const inputValue = ref('')

// const messages = ref<string[]>([])
</script>
<template>
  <div class="wrap">
    <div class="container">
      <div class="content overflow-y-auto">
        <div class="flex flex-col gap-3">
          <MessageBox v-for="(item, index) in websocketStore.messages" :key="index"
            ><slot>{{ item }}</slot></MessageBox
          >
        </div>
      </div>
      <div class="input-area shrink-0">
        <input type="text" class="h-full grow rounded" v-model="inputValue" />
        <button class="btn" @click="handleEnter">Enter</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  @apply h-screen w-screen bg-slate-700/50 p-5;
}
.container {
  @apply flex h-full w-full flex-col overflow-hidden rounded border;
}

.content {
  @apply w-full grow p-1;
}

.input-area {
  @apply flex h-10 w-full items-center gap-1 bg-slate-300 p-1;
}

.btn {
  @apply h-full w-[80px] shrink-0 rounded bg-green-400 hover:bg-green-200;
}
</style>
