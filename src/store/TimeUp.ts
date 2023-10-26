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
    
    let timerObject: number;

    timerObject = Number(setInterval(countDown, 1000));

    function Init() {
        TimesLeft.value = 15;
    }

    function resetTimer() {
        TimesLeft.value = 15;
        clearInterval(timerObject);
        timerObject = Number(setInterval(countDown, 1000));
        TimeUpStore.toFalse();
    }

    function countDown() {
    if (TimesLeft.value) {
        TimesLeft.value--;
        console.log(TimesLeft.value)
        console.log("okasiisi")
    } else {
        clearInterval(timerObject);
    
        TimeUpStore.toTrue();
    
        if (PlayerLifeStore.Count < 1) {
        PlayerLifeStore.IsNothingToTrue();
        router.push("/GameOver");
        }
    }
    }
      //時間制御終了
    return {TimesLeft, Init, resetTimer, timerObject}
})