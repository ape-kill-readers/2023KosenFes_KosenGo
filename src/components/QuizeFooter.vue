<script setup lang="ts">
    import { ref } from 'vue';

    const UserAnswer = ref('')
</script>

<template>
    <input v-model="UserAnswer" class="user_answer_input">
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