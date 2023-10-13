<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import router from './router';

  
</script>

<template>
  <div class="container">
    <header class="header">
      <RouterView name="header"></RouterView>
    </header>
    <main class="main">
      <RouterView />
    </main>
    <footer class="footer">
      <RouterView name="footer"></RouterView>
      <div>
          
      </div>
    </footer>
  </div>
</template>

<style lang="scss">

body{
  min-height: 100vh;
  #app {
    height: 100vh;
  }
}
.container {
  height: 100%;
}
.header {
    position:sticky;
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
