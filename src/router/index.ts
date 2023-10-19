import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import QuizeView from '../views/QuizeView.vue'
import FinishView from '../views/FinishView.vue'
import QuizeHeader from '../components/QuizeHeader.vue'
import QuizeFooter from '../components/QuizeFooter.vue'
import GameOverViewVue from '@/views/GameOverView.vue'
import GameOverFooter from '@/components/GameOverFooter.vue'
import FinishFooter from '../components/FinishFooter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      components: {
        default: StartView,
      },
    },
    {
      path: "/quize",
      name: "quize",
      components: {
        default: QuizeView,
        header: QuizeHeader,
        footer: QuizeFooter,
      },
    },
    {

      path: '/GameOver',
      name: 'GameOver',
      components:{
        default: GameOverViewVue,
        footer: GameOverFooter,
      }
    },
    {
      path: "/finished",
      name: "finish",
      components: {
        default: FinishView,
        header: QuizeHeader,
        footer: FinishFooter,
      },
    },
    {

      path: "/finished",
      name: "finish",
      components: {
        default: FinishView,
        header: QuizeHeader,
        footer: FinishFooter,
      },
    },
  ],
});


export default router
