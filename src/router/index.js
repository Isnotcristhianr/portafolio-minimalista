import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Proyects from '../views/Proyects.vue'
import NotFound from '../views/NotFound.vue'
import CertificateView from '../views/CertificateView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/proyects',
      name: 'proyects',
      component: Proyects,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/certificate',
      name: 'certificate',
      component: CertificateView,
    },
  ],
})

export default router
