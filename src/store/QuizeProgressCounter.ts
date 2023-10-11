import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useProgressCounterStore = defineStore('ProgressCounter', () => {
    const ProgressCount = ref(0) as Ref<number>
    function Increment() {
      ProgressCount.value++
    }

    return {ProgressCount, Increment}
});