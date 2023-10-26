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

function ReturnTop() {
    PlayerLifeStore.Init()
    QuizeDataStore.Init()
    ProgressCounterStore.Init()
    TimeUpStore.Init()
    TimesleftStore.Init()

    router.push("/")  
}
</script>

<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-message">ロードに失敗しました</div>
      <div class="underline"></div>
      <div class="retry-button-container" @click="ReturnTop">
        <div class="retry-button">リトライ</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.error-container {
  background-color: #fff;
  display: flex;
  width: 60vw;
  height: 55vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .error-message {
    color: #000;
    text-align: center;
    font-weight: bold;
    font-size: 5vh;
  }

  .underline {
    width: 70%;
    height: 1px;
    background-color: #000;
  }

  .retry-button-container {
    display: flex;
    justify-content: center;
    position: absolute;
    margin-top: 35vh;
    .retry-button {
      background-color: #feb11c;
      color: #fff;
      padding: 3vh 10vw;
      font-weight: bold;
      font-size: 4vh;
      filter: drop-shadow( 5px 5px #ddd )
    }
  }
}
</style>
