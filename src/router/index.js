import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Proyectos from '../views/Proyectos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/proyectos', component: Proyectos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



