import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBdRIs_B1d9ZQxr_2MWHR0NUJDkCMNsp-U',
//   authDomain: 'lol-chat-app-373b6.firebaseapp.com',
//   projectId: 'lol-chat-app-373b6',
//   storageBucket: 'lol-chat-app-373b6.appspot.com',
//   messagingSenderId: '428577182077',
//   appId: '1:428577182077:web:5716f670ca7fb9305dfc14'
// }

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
}

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)
