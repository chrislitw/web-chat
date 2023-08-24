import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  type UserType = {
    displayName: string | null
    email: string | null
    uid: string | null
    photoURL: string | null
  }
  const user = reactive<UserType>({ displayName: null, email: null, uid: null, photoURL: null })

  return { user }
})
