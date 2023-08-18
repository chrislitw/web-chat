<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()

const router = useRouter()

const name = ref('')

const handleLogin = () => {
  if (name.value === '') {
    alert('please enter name')
  } else {
    localStorage.setItem('name', name.value)
    authStore.name = name.value
    router.push({ name: 'home' })
    console.log('asdas')
  }
}
</script>
<template>
  <div class="wrap">
    <div class="container">
      <div class="flex flex-col gap-5">
        <h1 class="text-3xl font-bold text-zinc-700">Login</h1>
        <input class="input" type="text" v-model="name" placeholder="name" />
        <button class="btn" @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  @apply flex h-screen w-screen items-center justify-center bg-zinc-200 px-5;
}

.container {
  @apply max-w-sm rounded-md border border-zinc-400 bg-zinc-50 p-5 shadow;
}

.input {
  @apply h-12 w-full rounded-md border bg-zinc-100 p-3 focus:outline-blue-400;
}

.btn {
  @apply h-12 w-full rounded-md bg-blue-400 text-white hover:bg-blue-200 active:bg-blue-600;
}
</style>
