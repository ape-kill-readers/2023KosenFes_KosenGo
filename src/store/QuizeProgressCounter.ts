import axios from "axios";
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

    async function ProgressCountReset() {

      try {
        await axios.get("http://localhost:8080/ClearQuizeProgress")
      }catch(error) {
        console.log(error)
      }

      ProgressCount.value = 0
    }

    return {ProgressCount, Increment, ProgressCountReset}
});