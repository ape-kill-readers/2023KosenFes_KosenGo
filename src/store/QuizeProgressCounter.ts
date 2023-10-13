import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

const quizeLen = 3 //後で設定ファイルみたいなの作る

export const useProgressCounterStore = defineStore('ProgressCounter', () => {
    const ProgressCount = ref(0) as Ref<number>
    function Increment() {
      if (ProgressCount.value < quizeLen) {
        ProgressCount.value++
      }
    }

    return {ProgressCount, Increment}
});