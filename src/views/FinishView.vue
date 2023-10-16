<script setup lang="ts">
import { ref, type onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';
import {useProgressCounterStore} from '../store/QuizeProgressCounter'
import { useQuizeDataStore } from '../store/QuizeData'

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
</style>