import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const name = ref(localStorage.getItem('name'))
  console.log('name', name)

  return { name }
})
