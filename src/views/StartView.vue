<script setup lang="ts">
import type router from '@/router';


</script>

<template>
    <div class="explain_view">
        <div class="explain_box">
            <text class="explain_text">
                俺ら仲いいなああああああああああああああああああああああああああああああああああああああ
            </text>
        </div>
    </div>
</template>

<style lang="scss">
    .main {
        height: 70%;
    }
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
</style>