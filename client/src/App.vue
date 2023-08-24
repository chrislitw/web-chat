<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const data = localStorage.getItem('user')
if (typeof data === 'string') {
  const userData = JSON.parse(data)
  const { displayName, email, uid, photoURL } = userData
  userStore.user.displayName = displayName
  userStore.user.email = email
  userStore.user.uid = uid
  userStore.user.photoURL = photoURL
}
</script>

<template>
  <RouterView />
</template>

<style>
body {
  @apply overflow-hidden;
  height: 100dvh;
}
#app {
  @apply h-full w-full overflow-hidden;
}
</style>
