import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requireAuth: true }
    },
    { path: '/login', name: 'login', component: LoginView }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const useAuth = useAuthStore()
    if (useAuth.name) next()
    else next('/login')
  } else {
    next()
  }
})

export default router
