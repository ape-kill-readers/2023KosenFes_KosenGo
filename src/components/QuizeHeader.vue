<script setup lang="ts">
  import { onMounted, watch, ref } from 'vue';
  import {useProgressCounterStore} from '../store/QuizeProgressCounter'
import { storeToRefs } from 'pinia';

  const QuizeProgressCount = useProgressCounterStore()
  const {ProgressCount} = storeToRefs(QuizeProgressCount)

  console.log(QuizeProgressCount.ProgressCount)

  onMounted(() => {
    for(let i = 1; i <= ProgressCount.value; i++) {
      const LiElm = document.getElementById("counter" + i) as HTMLElement
      LiElm.style.backgroundColor = "#000000"
    }
  })

  watch (ProgressCount, () => {
    for(let i = 1; i <= ProgressCount.value; i++) {
      const LiElm = document.getElementById("counter" + i) as HTMLElement
      LiElm.style.backgroundColor = "#000000"
    }
  })



</script>

<template>
    <ul class="counter_list">
        <li v-for="loop in 3" :id="'counter'+ (loop)"><p>{{loop}}</p></li>
    </ul>
</template>

<style lang="scss">
.counter_list{
    color: aqua;
    background-color:#D9D9D9;
    list-style: none;
    height: 100%;
    
    
    li {
      display: inline-block;
      background-color: #666;
      height: 100%;
      width: 130px;
      line-height: 100px;
      font-size: large;
      text-align: center;
      p {
        height: 100%;
      }
    }
  }
  
</style>