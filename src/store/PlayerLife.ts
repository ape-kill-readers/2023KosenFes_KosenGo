import { defineStore } from "pinia";
import { type Ref, ref } from "vue";

const DefaultPlayerLifeCount = 10

export const usePlayerLifeStore = defineStore("PlayerLife", () => {
    const PlayerLifeCount = ref<number>(DefaultPlayerLifeCount)
    const PlayerLifeIsNothing = ref<boolean>(false)
    
    function Decrement() {
        PlayerLifeCount.value -= 1;
    }

    function PlayerLifeIsNothingToTrue() {
        if (PlayerLifeCount.value < 0) {
            PlayerLifeIsNothing.value = true
        }
    }
    
})