import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')

  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register.vue')

  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/login/test.vue')

  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/mainMage.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
