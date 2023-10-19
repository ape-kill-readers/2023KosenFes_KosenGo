<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import router from './router';

  
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">

.container {
  height: 100%;
}
.header {
    top: 0;
    height: 10%;
    pointer-events: unset;
    z-index: 999;
    background-color: #D9D9D9;
}

.footer {
  background-color: #666;
  width: 100%;
  height: 20%;
}

.main {
  height: 70%;
}
.div {
  text-align: center;
}

</style>
