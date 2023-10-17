import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import QuizeView from '../views/QuizeView.vue'
import QuizeHeader from '../components/QuizeHeader.vue'
import QuizeFooter from '../components/QuizeFooter.vue'
import StartHeader from '../components/StartHeader.vue'
import StartFooter from '../components/StartFooter.vue'
import GameOverViewVue from '@/views/GameOverView.vue'
import GameOverFooter from '@/components/GameOverFooter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      components: {
        default: StartView,
        header: StartHeader,
        footer: StartFooter
      }
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
    {
      path: '/GameOver',
      name: 'GameOver',
      components:{
        default: GameOverViewVue,
        footer: GameOverFooter,
      }
    },
  ]
})

export default router
