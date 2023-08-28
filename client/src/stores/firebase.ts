import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import { firebaseApp } from '@/config/firebase.ts'
import firebase from 'firebase/compat/app'
import { ref } from 'firebase/storage'

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
        const { displayName, email, uid, photoURL } = res.user as {
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

  // 登出
  const userSignOut = () => {
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

  // const firestore = firebase.firestore()
  // const messageCollection = firestore.collection('messages')
  // const messageQuery = messageCollection.orderBy('createdAt', 'desc').limit(100)

  // const _userChat = () => {
  //   const messages = ref<string[]>([])
  //   const unsubscribe = messageQuery.onSnapshot((snapshot) => {
  //     messages.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data })).reverse()
  //   })
  // }

  return { signInWithGoogle, userSignOut }
})
