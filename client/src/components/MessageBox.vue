<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

defineProps({
  msg: Object
})
</script>
<template>
  <template v-if="msg?.uid === userStore.user.uid">
    <div class="mb-5 flex flex-row-reverse gap-3">
      <div
        class="relative mx-0 my-auto h-fit w-fit max-w-[376px] break-words rounded-xl rounded-se-none bg-blue-500 px-3 py-1 text-white"
      >
        <span> {{ msg.message }} </span>
        <span class="absolute -bottom-6 right-0 px-3 text-gray-500">{{ msg.time }}</span>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="mb-3 flex gap-3">
      <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
        <img class="h-full w-full object-cover" :src="msg?.photoURL" alt="client-profile" />
      </div>
      <div
        class="relative mx-0 my-auto h-fit w-fit max-w-[376px] break-words rounded-xl rounded-ss-none bg-blue-500 px-3 py-1 text-white"
      >
        <span> {{ msg?.message }} </span>
        <span class="absolute -bottom-6 left-0 px-3 text-gray-500">{{ msg?.time }}</span>
      </div>
    </div>
  </template>
</template>
<style scoped></style>
