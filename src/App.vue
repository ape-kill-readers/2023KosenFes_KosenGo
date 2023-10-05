<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onUpdated, ref } from 'vue';
import router from './router';

const route = useRoute();

const quize_counter_active = () => {
  console.log(route.path)
  if (route.path == "/quize") {
    console.log(route.path)
    return true
  }  

  return false
}
</script>

<template>
  <div class="container">
    <header class="header">
      <ul class="counter_list" v-if="quize_counter_active()">
        <li v-for="loop in 3">{{loop}}</li>
      </ul>
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
.counter_list{
  color: aqua;
  background-color:#D9D9D9;
  list-style: none;
  height: 100%;
  
  
  li {
    display: inline-block;
    background-color: #666;
    height: 100%;
    width: 100px;
    text-align: center;
    line-height: 100px;
    font-size: large;
  }
}

.main {
  margin-top: 10%;
}
.div {
  text-align: center;
}

</style>
