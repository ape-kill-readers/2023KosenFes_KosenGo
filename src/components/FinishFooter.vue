<script setup lang="ts">
import { ref, type onBeforeUpdate, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import {useProgressCounterStore} from '../store/QuizeProgressCounter'
import { useQuizeDataStore } from '../store/QuizeData'
import { storeToRefs } from 'pinia';

const router = useRouter();
const ProgressCounterStore = useProgressCounterStore()

function toStartView() {
    router.push("/")
    ProgressCounterStore.ProgressCount = 0
    ProgressCounterStore.isQuizeFinished = false
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
  }
  .text {
    margin-top: 2.5vh;
    font-size: 3.3vh;
    text-align: center;
  }
  

}
</style>
