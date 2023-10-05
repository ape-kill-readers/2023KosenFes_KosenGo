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
    <main>
      <div class="main">
      <RouterView />
      </div>
    </main>
    <footer class="footer">
      <div>
        フッターエリア
      </div>
    </footer>
  </div>
</template>

<style>
.header {
  background-color: #D9D9D9;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

}


.main {
  margin-top: 10%;
}
.div {
  text-align: center;
}

</style>
