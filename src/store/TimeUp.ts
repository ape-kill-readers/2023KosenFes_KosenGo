import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimeUpStore = defineStore('isTimeUp', () => {
    const isTimeUp = ref<boolean>(false)
    function toTrue() {
        isTimeUp.value = true
    }

    function toFalse() {
        isTimeUp.value = false
    }

    function Init() {
        isTimeUp.value = false
    }

    return {isTimeUp, toTrue, toFalse, Init }
});

export const useTimesLeftStore = defineStore('TimesLeft', () => {
    const TimesLeft = ref<number>(15)

    function Init() {
        TimesLeft.value = 15;
    }

    return {TimesLeft, Init}
})