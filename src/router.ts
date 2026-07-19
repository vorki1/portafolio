// src/router/index.ts

import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import HomePage from './views/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
]

const router = createRouter({
  /*
    process.env.BASE_URL obtiene automáticamente
    el publicPath definido en vue.config.js.

    Desarrollo:
    /

    Producción:
    /portafolio/
  */
  history: createWebHistory(process.env.BASE_URL),

  routes,

  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router