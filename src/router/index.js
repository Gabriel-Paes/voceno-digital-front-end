import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:portfolioName',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue'),
      meta: { hideNavbar: true },
    },
    {
      path: '/new',
      name: 'portfolio-new',
      component: () => import('@/views/NewPortfolioView.vue'),
    },
  ],
})

export default router
