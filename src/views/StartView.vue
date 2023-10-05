<script setup lang="ts">
import type router from '@/router';


</script>

<template>
    <button class="btn" @click="() => {$router.push('quize')}">Start</button>
</template>

<style lang="scss" scoped>
.btn {
    display: block;
    margin: auto;
    
}

</style>