import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import { firebaseApp } from '@/config/firebase.ts'
import firebase from 'firebase/compat/app'

export const useFirebaseStore = defineStore('firebase', () => {
  // Google 登入
  const signInWithGoogle = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    firebaseApp
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const userStore = useUserStore()

        // console.log('Google 登录成功！', res)
        const { displayName, email, uid, photoURL } = res.user as unknown as {
          displayName: string | null
          email: string | null
          uid: string | null
          photoURL: string | null
        }
        userStore.user.displayName = displayName
        userStore.user.email = email
        userStore.user.uid = uid
        userStore.user.photoURL = photoURL
        localStorage.setItem('user', JSON.stringify(userStore.user))
        window.location.replace('/')
      })
      .catch((err) => {
        console.error('Google 登录失败：', err)
      })
  }

  // Google 登出
  const userLogOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        console.log('User signed out')
      })
      .catch((error) => {
        console.error('Sign out error:', error)
      })
  }

  return { signInWithGoogle, userLogOut }
})
