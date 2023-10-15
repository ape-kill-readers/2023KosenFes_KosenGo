import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimeUpStore = defineStore('isTimeUp', () => {
    const isTimeUp = ref<boolean>(false)
    function toTrue() {
        isTimeUp.value = true
    }

    return {isTimeUp, toTrue}
});