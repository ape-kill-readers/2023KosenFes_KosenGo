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
        <text class="press_enter_text"></text>
    </div>
    <input v-model="UserAnswer" @keyup.enter="consoled()" class="user_answer_input">
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