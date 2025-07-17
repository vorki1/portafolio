// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus páginas
import HomePage from './views/HomePage.vue'
import AboutMe from './views/AboutMe.vue'
import MyProyects from './views/MyProyects.vue'

const routes = [//Asocia el componente a la ruta
  { path: '/', component: HomePage },
  { path: '/aboutMe', component: AboutMe},
  { path: '/proyects', component: MyProyects},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
