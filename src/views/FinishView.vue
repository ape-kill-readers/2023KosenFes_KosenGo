<script setup lang="ts">

import { ref, onBeforeUnmount, onMounted } from "vue";
import { useRouter } from "vue-router";
import {usePlayerLifeStore} from '@/store/PlayerLife'
import {useQuizeDataStore} from '@/store/QuizeData'
import {useProgressCounterStore} from '@/store/QuizeProgressCounter'
import {useTimeUpStore, useTimesLeftStore} from '@/store/TimeUp'

const router = useRouter();

const PlayerLifeStore = usePlayerLifeStore()
const QuizeDataStore = useQuizeDataStore()
const ProgressCounterStore = useProgressCounterStore()
const TimeUpStore = useTimeUpStore()
const TimesleftStore = useTimesLeftStore()

const FadeInAnimationIntervalId = ref<NodeJS.Timeout>() //フェードイン時のアニメーションの秒数を管理するref

onBeforeUnmount(() => {
  clearInterval(FadeInAnimationIntervalId.value)    
})

onMounted(() => {
  FadeInAnimationIntervalId.value = setInterval(FadeInAnimationInterval, 1000)  
})

function FadeInAnimationInterval() {
  //FadeIn時のインターバル作るための関数
  console.log("fadein")
  clearInterval(FadeInAnimationIntervalId.value)
  FadeInAnimationIntervalId.value = undefined
}



function toStartView() {
    PlayerLifeStore.Init()
    QuizeDataStore.Init()
    ProgressCounterStore.Init()
    TimeUpStore.Init()
    TimesleftStore.Init()

    router.push("/")  
}
</script>

<template>
  <div class="container">
    <div class="finish_content">
      <div class="finish_main">
        <div class="div">
          <div class="div-2">
            <div class="column">
              <div class="div-3">
                <div style="display: flex">
                  <div class="div-4 up-in">A</div>
                  <div class="div-4 absolute down-in">A</div>
                </div>
                <div style="display: flex">
                  <div class="div-5 up-in">L</div>
                  <div class="div-5 absolute down-in">L</div>
                </div>
                <div style="display: flex">
                  <div class="div-6 up-in">L</div>
                  <div class="div-6 absolute down-in">L</div>
                </div>
              </div>
            </div>
            <div class="column-2">
              <div class="div-7">
                <div style="display: flex">
                  <div class="div-8 up-in">C</div>
                  <div class="div-8 absolute down-in">C</div>
                </div>
                <div style="display: flex">
                  <div class="div-9 up-in">L</div>
                  <div class="div-9 absolute down-in">L</div>
                </div>
                <div style="display: flex">
                  <div class="div-10 up-in">E</div>
                  <div class="div-10 absolute down-in">E</div>
                </div>
                <div style="display: flex">
                  <div class="div-11 up-in">A</div>
                  <div class="div-11 absolute down-in">A</div>
                </div>
                <div style="display: flex">
                  <div class="div-12 up-in">R</div>
                  <div class="div-12 absolute down-in">R</div>
                </div>
                <div style="display: flex">
                  <div class="div-13 up-in">!</div>
                  <div class="div-13 absolute down-in">!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="finish_footer">
        <button class="Retry-button" @click="toStartView">リトライ</button>
      </div>
    </div>
    <div v-if="FadeInAnimationIntervalId" class="from_quize"></div>
  </div>
</template>

<style lang="scss" scoped>

.container {
  display: flex;
}

.finish_content {
  overflow: hidden;
}
/* main */

.finish_main {
  height: 85vh;
  width: 100vw;
  background-color: white;
  .div {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .div-2 {
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
      flex-direction: column;
    }
  }

  .column {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: flex;
    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .div-3 {
    display: flex;
    margin-top: -20vh;
    gap: 10px;
  }

  .div-4,
  .div-5,
  .div-6 {
    justify-content: center;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 10rem;
    font-weight: 700;
    margin-top: -20vh;
    -webkit-text-stroke: 3px #000;

    @media (max-width: 991px) {
      font-size: 3rem;
      margin-top: -20vh;
      margin-bottom: 20vh;
    }

    animation: emphasis 
  }

  .div-4 {
      color: #FE0F0F;
      animation-delay: 1.25s
  }

  .div-5 {
      color: #F36324;
      animation-delay: 1.3s
  }

  .div-6 {
      color: #FFE247;
      animation-delay: 1.35s
  }

  .column-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-left: 20px;
    @media (max-width: 991px) {
      margin-left: 0;
      width: 100%;
    }
  }

  .div-7 {
    display: flex;
    margin-top: -20vh;
    gap: 10px;
  }

  .div-8,
  .div-9,
  .div-10,
  .div-11,
  .div-12,
  .div-13 {
    justify-content: center;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 10rem;
    font-weight: 700;
    margin-top: -20vh;
    -webkit-text-stroke: 3px black;


    @media (max-width: 991px) {
      font-size: 3rem;
      margin-top: -20vh;
      margin-bottom: 20vh;
    }
  }

  .div-8 {
      color: #C1FE41;
      animation-delay: 1.4s;
  }

  .div-9 {
      color: #72FBA0;
      animation-delay: 1.45s
  }

  .div-10 {
      color: #64F6FF;
      animation-delay: 1.5s
  }

  .div-11 {
      color: #377BFF;
      animation-delay: 1.55s
  }

  .div-12 {
      color: #ED5EF9;
      animation-delay: 1.6s
  }

  .div-13 {
      color: #FF1BF6;
      animation-delay: 1.65s
  }

  .absolute {
    position: absolute;
  }

  .up-in {
    @keyframes up_anime{
      0% {
        opacity: 0;
        transform: translateY(100vh);
      }
      70% {
        opacity: 1;
        transform: translateY(0);
      }
      90% {
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }
    animation-name: up_anime;
    animation-duration: 0.5s;
    animation-fill-mode:both;
  }

  .down-in {
    @keyframes down_anime{
      0% {
        opacity: 0;
        transform: translateY(-100vh);
      }
      70% {
        opacity: 1;
        transform: translateY(0);
      }
      90% {
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }
    animation-name: down_anime;
    animation-duration: 0.5s;
    animation-fill-mode:both;
  }

  @keyframes emphasis {
    0% { font-size: 10rem }
    50% { font-size: 15rem }
    100% { font-size: 10rem }
  }
}

/* footer */
.finish_footer {
  display: block;
  height: 15vh;
  background-color: white;
  width: 100vw;
  .Retry-button {
    height: 60% ;
    width: 20%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    background-color: #feb11c;
    color: #fff;
    border: #000 solid 2px;
    text-align: center;
    font-family: Inter;
    font-size: 5vh;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-shadow: 1px 1px 0 #000,-1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000;
  }
}

.from_quize {
  display: flex;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;

  @keyframes decreaseOpacity {
    0% { opacity: 1 }
    50% { opacity: 1 }
    100% { opacity: 0 }
  }
  animation-name: decreaseOpacity;
  animation-duration: 1.2s;
}
</style>