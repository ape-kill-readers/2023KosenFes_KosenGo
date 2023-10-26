import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import QuizeView from '../views/QuizeView.vue'
import FinishView from '../views/FinishView.vue'
import GameOverViewVue from '@/views/GameOverView.vue'
import QuizeFetchErrorView from '@/views/QuizeFetchErrorView.vue'
import TimeUpView from '@/views/TimeUpView.vue'

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
      },
    },
    {

      path: '/GameOver',
      name: 'GameOver',
      components:{
        default: GameOverViewVue,
      }
    },
    {
      path: "/finished",
      name: "finish",
      components: {
        default: FinishView,
      },
    },

    {
      path: "/error",
      name: "error",
      component:QuizeFetchErrorView,
    },
    {
      path: "/timeup",
      name: "timeup",
      component:TimeUpView,
    }
  ],
});


export default router
