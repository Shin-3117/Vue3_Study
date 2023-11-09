import { createRouter, createWebHistory } from 'vue-router'
import SomeView from '../views/SomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'some',
      component: SomeView
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('../views/OtherView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentViews.vue')
    },
    {
      path: '/student/:name',
      name: 'student',
      component: () => import('../views/StudentDetailView.vue')
    }
  ]
})

export default router
