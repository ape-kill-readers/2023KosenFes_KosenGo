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

<style>

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
  background-color: #D9D9D9;
  width: 100%;
  height: 13%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

}

.footer {
  background-color: #666;
  width: 100%;
  height: 27%;
}


.main {
  height: 60%;
}
.div {
  text-align: center;
}

</style>
