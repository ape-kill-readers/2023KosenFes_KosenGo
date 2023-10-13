<script setup lang="ts">
import type router from '@/router';
import {useQuizeDataStore} from '../store/QuizeData'
const QuizeData = useQuizeDataStore()



</script>

<template>
    <button class="btn" @click="() => {
        QuizeData.QuizeFetch()
        console.log(QuizeData.QuizeData)
        $router.push('quize')}">Start</button>
</template>

<style lang="scss" scoped>
.btn {
    display: block;
    margin: auto;
    
}

</style>