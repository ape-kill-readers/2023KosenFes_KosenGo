import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import QuizeView from '../views/QuizeView.vue'
import QuizeHeader from '../components/QuizeHeader.vue'
import QuizeFooter from '../components/QuizeFooter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/quize',
      name: 'quize',
      components: {
        default: QuizeView,
        header: QuizeHeader,
        footer: QuizeFooter
      }
    },
  ]
})

export default router
