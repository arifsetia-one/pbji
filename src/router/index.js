import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PresenceView from '../views/PresenceView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/presence',
    name: 'presence',
    component: PresenceView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
