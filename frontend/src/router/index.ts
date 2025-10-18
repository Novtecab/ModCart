import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '../views/SuccessView.vue'
import CancelView from '../views/CancelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: CancelView
    }
  ]
})

export default router
