import { defineStore } from "pinia";
import { type Ref, ref } from "vue";

const DefaultPlayerLifeCount = 0

export const usePlayerLifeStore = defineStore("PlayerLife", () => {
    const Count = ref<number>(DefaultPlayerLifeCount)
    const IsNothing = ref<boolean>(false)
    
    function Decrement() {
        Count.value -= 1;
    }

    function IsNothingToTrue() {
        IsNothing.value = true
    }

    function Init() {
        Count.value = DefaultPlayerLifeCount;
    }

    return {Count, IsNothing, Decrement, IsNothingToTrue, Init}
    
})