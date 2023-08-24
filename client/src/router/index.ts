import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { requireAuth: true } },
    { path: '/login', name: 'login', component: LoginView }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const userStore = useUserStore()
    const { displayName, email, uid, photoURL } = userStore.user

    if (uid) {
      // console.log('user login', displayName, email, uid, photoURL)
      next()
    } else {
      // console.log('user not login', displayName, email, uid, photoURL)
      next('/login')
    }
  } else {
    next()
  }
})

export default router
