import axios from "axios";
import { defineStore } from "pinia";
import { ref, watch, type Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type router from "@/router";

export const useProgressCounterStore = defineStore('ProgressCounter', () => {
    const ProgressCount = ref(1) as Ref<number> //クイズ終了状態を管理するフラグだよ～ん

    function Increment() {
      ProgressCount.value++
    }



    function Init() {
      ProgressCount.value = 1;
      
    }

    return {Init,ProgressCount, Increment}
});