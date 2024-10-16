<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { useWebsocketStore } from '@/stores/websocket'
import Message from '@/components/chatroom/Message.vue'

const websocketStore = useWebsocketStore()

type Msg = {
  uid: string
  message: string
  photoURL: string
  time: string
}

const chatroom = ref()

onUpdated(() => {
  const scrollHeight: number = chatroom.value.scrollHeight ?? 0
  chatroom.value.scrollTo(0, scrollHeight)
})
</script>
<template>
  <div ref="chatroom" class="w-full grow overflow-y-auto p-2">
    <div class="flex flex-col gap-3">
      <template v-for="(item, index) in websocketStore.messages as unknown as Msg[]" :key="index">
        <Message :msg="item"></Message>
      </template>
    </div>
  </div>
</template>
<style scoped></style>
