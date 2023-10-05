<script setup lang="ts">
import type router from '@/router';


</script>

<template>
    <main>
    <div class="btn"><button @click="() => {$router.push('#')}">Start</button></div>
    </main>
</template>

<style lang="scss">
.btn {
    margin: auto;
    button{
        width: 300px;
        height: 300px;
    }
}

</style>