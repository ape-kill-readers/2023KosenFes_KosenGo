<script setup lang="ts">
    import { ref } from 'vue';

    const UserAnswer = ref('')
    const consoled = () => {
        console.log("println")
        UserAnswer.value = ''
    }
</script>

<template>
    <input v-model="UserAnswer" @keyup.enter="() => {$router.push('quize')}" class="user_answer_input">
</template>

<style>
    .user_answer_input {   
        width: 30%;
        height: 30%;
        margin: 16px;
    }
    .footer {
        display: flex;
        justify-content: center;
    }
</style>