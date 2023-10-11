<script setup lang="ts">
import { ref, type onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';
import {useProgressCounterStore} from '../store/QuizeProgressCounter'
const QuizeProgressCount = useProgressCounterStore()

const route = useRoute();



</script>

<template>
    <label class="currentStatus">
        <div>
            <div class="modeBox">
                <h2 class="modeText">10</h2>
            </div>
            <div class="leftBox">
                <h2 class="leftText">残3</h2>
            </div>
        </div>
    </label>

    <div class="question">
        <div class="questionField">
            <div class="questionBox">
                
            </div>
        </div>
    </div>
    
    <button @click="QuizeProgressCount.Increment()">ss</button>
</template>

<style lang="scss">
    .currentStatus {
        display: flex;
        flex-direction: row-reverse;
    }
    .modeBox {
        display: flex;
        background-color: #666666;
        align-items: center;
        justify-content: center;
        width: 10vh;
        height: 10vh;
    }
    .modeText {
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
    .question {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 13vh;
    }
    .questionField {
        display: flex;
        position: absolute;
    }
    .questionBox {
        background-color: #d9d9d9;
        padding-right: 35vh;
        padding-left: 35vh;
        padding-top: 20vh;
        padding-bottom: 20vh;
        /*
        width: 775px;
        height: 345px;
        */
    }
</style>