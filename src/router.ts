// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus páginas
import HomePage from './views/HomePage.vue'

const routes = [//Asocia el componente a la ruta
  { path: '/', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
