import { createRouter, createWebHistory } from 'vue-router'

import Cards from '@/views/cards.vue'
import Home from '@/views/index.vue'
import Live from '@/views/live.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cards',
    name: 'About',
    component: Cards
  },
  {
    path: '/live',
    name: 'live',
    component: Live
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
