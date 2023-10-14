<script setup lang="ts">
    import {useQuizeDataStore} from '../store/QuizeData'
    import { useProgressCounterStore } from '@/store/QuizeProgressCounter';
    import { ref } from 'vue';
    const QuizeData = useQuizeDataStore()
    const ProgressCounter = useProgressCounterStore() 

    const UserAnswer = ref('')
    const consoled = () => {
        console.log("println")
        UserAnswer.value = ''
    }

    function JudgeAnswer() {
    if (QuizeData.QuizeData.ans == UserAnswer.value){
        QuizeData.QuizeFetch()
        ProgressCounter.Increment()
        UserAnswer.value = ''
    }
}
</script>

<template>
    <div class="press_enter_view">
        <text class="press_enter_text"></text>
    </div>
    <input v-model="UserAnswer" @keyup.enter="JudgeAnswer()" class="user_answer_input">
    <p id="judge_result"></p>
</template>

<style>
    .user_answer_input {   
        width: 30%;
        height: 30%;
        margin: 10px;
    }
    .press_enter_text {
        color: black;
        font-size: 2.5vh;
    }
    .press_enter_view {
        width: 50%;
        height: 15%;
        margin-bottom: 10px;
        text-align: end;
        margin-left: 30%;
    }
    .footer {
        display:block;
        background-color: white;
    }
</style>