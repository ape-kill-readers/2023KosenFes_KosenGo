<script setup lang="ts">
import { ref, type onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';
import {useProgressCounterStore} from '../store/QuizeProgressCounter'
import { useQuizeDataStore } from '../store/QuizeData'
const QuizeProgressCount = useProgressCounterStore()
const QuizeData = useQuizeDataStore()

const route = useRoute();

</script>

<template>
    <div class="statusDepartment">
        <div>
            <div class="ansTimeBox">
                <h2 class="ansTimeText">10</h2>
            </div>
            <div class="leftBox">
                <h2 class="leftText">残3</h2>
            </div>
        </div>
    </div>

    <div class="quizeDepartment">
        <div class="quizeField">
            <div class="quizeBox">
                <text class="quizeText">{{ QuizeData.QuizeData.que  }}</text>
            </div>
        </div>
    </div>
    
    <button @click="QuizeProgressCount.Increment()">ss</button>
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