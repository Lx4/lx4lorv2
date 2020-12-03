import { createRouter, createWebHistory } from 'vue-router';

import Card from '@/views/card.vue';
import Cards from '@/views/cards.vue';
import Home from '@/views/index.vue';
import Live from '@/views/live.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/live',
    name: 'Live',
    component: Live
  },
  {
    path: '/card/:cardCode',
    name: 'Card',
    component: Card,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
