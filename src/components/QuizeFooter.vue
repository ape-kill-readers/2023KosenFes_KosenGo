<script setup lang="ts">
    import {useQuizeDataStore} from '../store/QuizeData'
    import { useProgressCounterStore } from '@/store/QuizeProgressCounter';
    import { useTimeUpStore, useTimesLeftStore } from '../store/TimeUp'
    import { onMounted, ref, watch } from 'vue';
    import { storeToRefs } from 'pinia';

    const QuizeData = useQuizeDataStore()
    const ProgressCounter = useProgressCounterStore() 
    const QuizeProgressCount = useProgressCounterStore()
    const TimesLeftStore = useTimesLeftStore()
    const {ProgressCount} = storeToRefs(QuizeProgressCount)
    const {TimesLeft} = storeToRefs(TimesLeftStore)
    const TimeUp = useTimeUpStore()

    const UserAnswer = ref('')
    const JudgeResult = ref<HTMLParagraphElement | null>()

    watch(ProgressCount,() => {
        if(JudgeResult.value) {
            JudgeResult.value.textContent = ""
        }
    })

    function QuizeRetry() {
        TimeUp.toFalse()
        QuizeData.QuizeFetch()
        TimesLeft.value = 15;
    }

    function JudgeAnswer() {
    if (QuizeData.QuizeData.ans == UserAnswer.value){
        if(JudgeResult.value) {
            JudgeResult.value.textContent = "正解！w"
        }
        QuizeData.QuizeFetch()
        ProgressCounter.Increment()
        UserAnswer.value = ''
                
    } else {
        if(JudgeResult.value) {
            JudgeResult.value.textContent = "ざんねん！w"
        }
        UserAnswer.value=''

        console.log(JudgeResult.value)
        
    }
}
</script>

<template>
    <div class="press_enter_view">
        <text class="press_enter_text"></text>
    </div>
    <input v-if="!TimeUp.isTimeUp" v-model="UserAnswer" @keydown.enter="JudgeAnswer()" class="user_answer_input">
    <button v-else class="user_answer_input" @click="QuizeRetry()" >リトライ</button>
    <p ref="JudgeResult" id="judge_result" class="judge_result"></p>
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
    .judge_result {
        color: black;
    }
</style>