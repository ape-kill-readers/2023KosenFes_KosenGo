<script setup lang="ts">
import { ref, watch } from 'vue';
import {useProgressCounterStore} from '../store/QuizeProgressCounter'
import { useQuizeDataStore } from '../store/QuizeData'
import { useTimeUpStore } from '../store/TimeUp'
const QuizeProgressCount = useProgressCounterStore()
const QuizeData = useQuizeDataStore()
const TimeUp = useTimeUpStore()

//残り時間制御
const timesLeft = ref<number>(10) //残り時間
let timerObject: number

watch(timesLeft, () => {
    if(timesLeft.value == 0){
        //時間切れ処理
        TimeUp.toTrue()
    }
})

watch(QuizeProgressCount, () => {
    clearInterval(timerObject)
    timesLeft.value = 10
    timerObject = Number(setInterval(countDown, 1000))
})

timerObject = Number(setInterval(countDown, 1000))

function countDown() {
    if(timesLeft.value){
        timesLeft.value--
    }
    else {
        clearInterval(timerObject)
    }
}

</script>

<template>
    <div class="statusDepartment">
        <div>
            <div class="ansTimeBox">
                <h2 class="ansTimeText">{{ timesLeft }}</h2>
            </div>
            <div class="leftBox">
                <h2 class="leftText">残3</h2>
            </div>
        </div>
    </div>

    <div class="quizeDepartment">
        <div class="quizeField">
            <div class="quizeBox">
                <p class="quizeText">{{ QuizeData.QuizeData.que  }}</p>
                <p v-if="TimeUp.isTimeUp" class="quizeText">時間切れ！（笑）</p>
            </div>
        </div>
    </div>
    
    <button @click="QuizeProgressCount.Increment()">ss</button>
    <button @click="() => {
        QuizeProgressCount.ProgressCountReset()
    }">reset</button>
</template>

<style lang="scss">
    .statusDepartment {
        display: flex;
        flex-direction: row-reverse;
    }
    .ansTimeBox {
        display: flex;
        background-color: #666666;
        align-items: center;
        justify-content: center;
        width: 10vh;
        height: 10vh;
    }
    .ansTimeText {
        color: white;
    }
    .leftBox {
        display: flex;
        background-color: #D9D9D9;
        align-items: center;
        justify-content: center;
        width: 10vh;
        height: 10vh;
    }
    .leftText {
        color: black;
    }
    .quizeDepartment {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 13vh;
    }
    .quizeField {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
    }
    .quizeBox {
        display: flex;
        width: 75vh;
        height: 40vh;
        align-items: center;
        justify-content: center;
        background-color: #d9d9d9;
        word-wrap: break-word;
        overflow: hidden;
    }
    .quizeText {
        width: 75vh;
        padding-right: 4vh;
        padding-left: 4vh;
        text-align: center;
        font-size: 4vh;
        color: red;
    }
</style>