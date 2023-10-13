<script setup lang="ts">
    import { ref } from 'vue';

    const UserAnswer = ref('')
    const consoled = () => {
        console.log("println")
        UserAnswer.value = ''
    }
</script>

<template>
    <div class="press_enter_view">
        <text class="press_enter_text">文字入力ができる状態でEnterキーを押してね</text>
    </div>
    <input v-model="UserAnswer" @keyup.enter="() => {$router.push('quize')}" class="user_answer_input">
</template>

<style>
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
    .footer {
        display:block;
        background-color: white;
    }
</style>