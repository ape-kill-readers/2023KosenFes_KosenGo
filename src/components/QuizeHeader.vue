<script setup lang="ts">
</script>

<template>
    <ul class="counter_list">
        <li v-for="loop in 3"><p>{{loop}}</p></li>
    </ul>
</template>

<style>
.counter_list{
    color: aqua;
    background-color:#D9D9D9;
    list-style: none;
    height: 100%;
    
    
    li {
      display: inline-block;
      background-color: #666;
      height: 100%;
      width: 130px;
      line-height: 100px;
      font-size: large;
      text-align: center;
      p {
        height: 100%;
      }
    }
  }
  
</style>