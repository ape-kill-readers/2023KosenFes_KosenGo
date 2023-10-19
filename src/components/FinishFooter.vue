<script setup lang="ts">
import { ref, type onBeforeUpdate, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import {usePlayerLifeStore} from '@/store/PlayerLife'
import {useQuizeDataStore} from '@/store/QuizeData'
import {useProgressCounterStore} from '@/store/QuizeProgressCounter'
import {useTimeUpStore, useTimesLeftStore} from '@/store/TimeUp'

const PlayerLifeStore = usePlayerLifeStore()
const QuizeDataStore = useQuizeDataStore()
const ProgressCounterStore = useProgressCounterStore()
const TimeUpStore = useTimeUpStore()
const TimesleftStore = useTimesLeftStore()

const router = useRouter();


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
  <div class="Retry-field">
    <div class="Retry-button" @click="toStartView">   
      <div class="text">リトライ</div>
    </div>
  </div>
</template>

<style lang="scss">
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
  }
  .text {
    margin-top: 2.5vh;
    font-size: 3.3vh;
    text-align: center;
  }
  

}
</style>
