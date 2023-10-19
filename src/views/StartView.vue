<script setup lang="ts">
import { ref } from 'vue';
import {useQuizeDataStore} from '../store/QuizeData'
import { useRouter, useRoute } from 'vue-router';

const QuizeData = useQuizeDataStore()
const UserAnswer = ref('')
const router = useRouter()
async function TransitionQuizeView() {
    try {

        //ここにロード画面
        await QuizeData.QuizeFetch()
        console.log(QuizeData.QuizeData)
        router.push('quize')        
    }catch (err) {
        console.log("問題をfetchできませんでした")
        router.push("/error")
    }
}


</script>

<template>
    <div class="start_header">
        <p class="header_content"> スタート画面 </p>
    </div>
    <div class="start_main">
        <div class="explain_view">
            <div class="explain_box">
                <text class="explain_text">
                    ああああああああああああああああああああああああああああああああああ
                </text>
            </div>
        </div>
    </div>
    <div class="start_footer">
        <div class="press_enter_view">
            <text class="press_enter_text">文字入力ができる状態でEnterキーを押してね</text>
        </div>
        <input v-model="UserAnswer" @keydown.enter="TransitionQuizeView" class="user_answer_input">
    </div>
</template>

<style lang="scss" scoped>
/* header */

.start_header {
    height: 15vh;
    background-color: #D9D9D9;
    
    .header_content{
        color: white;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 10vh;
        font-weight: bold;
        text-align: center; 
        text-shadow: 0px 4px 4px black;
        -webkit-text-stroke: 1.5px;
        -webkit-text-stroke-color: black;
    }
}

/* main */

.start_main {
    background-color: white;
    height: 70vh;
    .explain_view {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .explain_box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120vh;
        height: 60vh;
        margin-top: 5vh;
        background-color: white;
        word-wrap: break-word;
        overflow: hidden;
    }
    .explain_text {
    width: 120vh;
    padding-right: 4vh;
    padding-left: 4vh;
    text-align: center;
    font-size: 4vh;
    color: red;
    }
}

/* footer */

.start_footer {
    display:block;
    height: 15vh;
    background-color: white;

    .user_answer_input {  
        all: unset; 
        width: 50%;
        height: 50%;
        margin-left: 25%;
        text-align: center;
        background-color: #d9d9d9;
        font-size: 4vh;
        color: black
    }
    .press_enter_text {
        color: black;
        font-size: 2.5vh;
    }
}


</style>