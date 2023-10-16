import { defineStore } from "pinia";
import { ref, watch, type Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type router from "@/router";

const quizeLen = 3 //後で設定ファイルみたいなの作る



export const useProgressCounterStore = defineStore('ProgressCounter', () => {
    const ProgressCount = ref(0) as Ref<number>
    const isQuizeFinished = ref(false);  //クイズ終了状態を管理するフラグだよ～ん

    function Increment() {
      if (ProgressCount.value < quizeLen) {
        ProgressCount.value++
      } else {
        isQuizeFinished.value = true;
      }
    }

    return {ProgressCount, Increment, isQuizeFinished};
});