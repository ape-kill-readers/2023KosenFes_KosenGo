<script setup lang="ts">
import { ref, type onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';
import {useProgressCounterStore} from '../store/QuizeProgressCounter'
const QuizeProgressCount = useProgressCounterStore()

const route = useRoute();


</script>

<template>

    <button @click="QuizeProgressCount.Increment()">ss</button>
</template>