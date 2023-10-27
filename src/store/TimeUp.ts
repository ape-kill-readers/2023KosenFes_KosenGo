import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePlayerLifeStore } from "./PlayerLife";

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
    const TimeUpStore = useTimeUpStore()
    const PlayerLifeStore = usePlayerLifeStore()
    const router = useRouter()
    
    const timerObject = ref<number>();

    console.log("pinia instance TimeLeft")

    console.log("piniaInit", timerObject)

    function Init() {
        TimesLeft.value = 15;
    }

    function setTimer() {
        timerObject.value = Number(setInterval(countDown, 1000));
    }

    function resetTimer() {
        TimesLeft.value = 15;
        console.log("timerObjBeforReset", timerObject);
        clearInterval(timerObject.value);
        console.log("timeObjAfterReset", timerObject);
        timerObject.value = Number(setInterval(countDown, 1000));
        console.log("TimeUp.ts raw50", timerObject)
        TimeUpStore.toFalse();
    }

    function countDown() {
    if (TimesLeft.value) {
        TimesLeft.value--;
        console.log(TimesLeft.value)
        console.log("okasiisi")
    } else {
        clearInterval(timerObject.value);
    
        TimeUpStore.toTrue();
    
    }
    }
      //時間制御終了
    return {TimesLeft, Init, resetTimer, timerObject, setTimer}
})