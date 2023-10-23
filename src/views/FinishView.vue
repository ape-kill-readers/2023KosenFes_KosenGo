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
        <div class="Retry-field">
          <div class="Retry-button" @click="toStartView">   
            <div class="text">リトライ</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="FadeInAnimationIntervalId" class="from_quize"></div>
  </div>
</template>

<style lang="scss" scoped>

.container {
  display: flex;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .div-3 {
    display: flex;
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
  }

  .div-4 {
      color: #FEAD0F;
      animation-delay: 1.25s
  }

  .div-5 {
      color: #F3EB24;
      animation-delay: 1.3s
  }

  .div-6 {
      color: #CAF324;
      animation-delay: 1.35s
  }

  .column-2 {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
    @media (max-width: 991px) {
      margin-left: 0;
      width: 100%;
    }
  }

  .div-7 {
    display: flex;
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
      color: #40D38D;
      animation-delay: 1.4s;
  }

  .div-9 {
      color: #72FBDA;
      animation-delay: 1.45s
  }

  .div-10 {
      color: #52B6EE;
      animation-delay: 1.5s
  }

  .div-11 {
      color: #5071E8;
      animation-delay: 1.55s
  }

  .div-12 {
      color: #AC45C6;
      animation-delay: 1.6s
  }

  .div-13 {
      color: #E481FD;
      animation-delay: 1.65s
  }

  .absolute {
    position: absolute;
  }

  .up-in {
    @keyframes up_anime{
      from {
        opacity: 0;
        transform: translateY(100vh);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation-name: up_anime;
    animation-duration: 0.5s;
    animation-fill-mode:both;
  }

  .down-in {
    @keyframes down_anime{
      from {
        opacity: 0;
        transform: translateY(-100vh);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation-name: down_anime;
    animation-duration: 0.5s;
    animation-fill-mode:both;
  }
}

/* footer */
.finish_footer {
  height: 15vh;
  width: 100vw;
  background-color: white;
  .Retry-field {
    display: flex;
    justify-content: center;
    align-content: center;
    .Retry-button {
      display: flex;
      justify-content: center;
      width: 35vw;
      height: 10vh;
      background-color: #999;
      border-radius: 5vh;
      .text {
        margin-top: 2.5vh;
        font-size: 3.3vh;
        text-align: center;
        color: black;
      }
    }
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
