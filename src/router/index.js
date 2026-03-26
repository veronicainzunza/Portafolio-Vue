import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Proyectos from '../views/Proyectos.vue'
import Habilidades from '@/views/Habilidades.vue'
import Contacto from '@/views/Contacto.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/proyectos', component: Proyectos },
  { path: '/habilidades', component: Habilidades },
  { path: '/contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



