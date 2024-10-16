<script setup lang="ts">
import Header from '@/components/chatroom/Header.vue'
import Content from '@/components/chatroom/Content.vue'
import Input from '@/components/chatroom/Input.vue'
</script>
<template>
  <div class="chat-wrapper">
    <div class="relative m-auto flex h-full max-w-xl flex-col overflow-hidden rounded-lg border">
      <Header></Header>
      <Content></Content>
      <Input></Input>
    </div>
  </div>
</template>
<style scoped>
.chat-wrapper {
  width: 100vw;
  height: 100dvh;
  padding: 1.25rem;
}
</style>
