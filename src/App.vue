<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header">
    <div>s</div>
    <div>a</div>
  </header>
  <main><RouterView /></main>
</template>

<style>
.header {
  background-color: #D9D9D9;
  width: 100%;
  height: 10%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
}

.main {
  margin-top: 10%;
}
</style>
