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
    path: '/forget',
    name: 'forget',
    component: () => import('../views/login/forget.vue')

  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/login/test.vue')

  },
  {
    path: '/',
    name: 'main',
    component: () => import('../views/main/mainMage.vue'),
    children: [
      { path: 'home', name: 'home',component: () => import('../views/main/home.vue') },
      { path: 'user', name: 'user',component: () => import('../views/main/User.vue') },
      { path: 'machine', name: 'machine',component: () => import('../views/main/machineMenu.vue') },
    ],

  },
  // {
  //   path: '/machine',
  //   name: 'machine',
  //   component: () => import('../views/main/machineMenu.vue')

  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
