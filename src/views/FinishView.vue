<script setup lang="ts">
import { ref, type onBeforeUpdate } from "vue";
import { useRoute } from "vue-router";
import { useProgressCounterStore } from "../store/QuizeProgressCounter";
import { useQuizeDataStore } from "../store/QuizeData";

const route = useRoute();
</script>

<template>
  <div class="div">
    <div class="div-2">
      <div class="column">
        <div class="div-3">
          <div class="div-4">A</div>
          <div class="div-5">L</div>
          <div class="div-6">L</div>
        </div>
      </div>
      <div class="column-2">
        <div class="div-7">
          <div class="div-8">C</div>
          <div class="div-9">L</div>
          <div class="div-10">E</div>
          <div class="div-11">A</div>
          <div class="div-12">R</div>
          <div class="div-13">!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.div {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.div-2 {
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
  }
}

.column {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    width: 100%;
  }
}

.div-3 {
  display: flex;
  gap: 10px;
}

.div-4,
.div-5,
.div-6 {
  justify-content: center;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 10rem;
  font-weight: 700;
  margin-top: -20vh;
  -webkit-text-stroke: 3px #000;
  @media (max-width: 991px) {
    font-size: 2rem;
    margin-top: -20vh;
    margin-bottom: 20vh;
  }
}

.div-4 {
    color: #FEAD0F;
}

.div-5 {
    color: #F3EB24;
}

.div-6 {
    color: #CAF324;
}

.column-2 {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  @media (max-width: 991px) {
    margin-left: 0;
    width: 100%;
  }
}

.div-7 {
  display: flex;
  gap: 10px;
}

.div-8,
.div-9,
.div-10,
.div-11,
.div-12,
.div-13 {
  justify-content: center;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 10rem;
  font-weight: 700;
  margin-top: -20vh;
  -webkit-text-stroke: 3px black;
  @media (max-width: 991px) {
    font-size: 2rem;
    margin-top: -20vh;
    margin-bottom: 20vh;
  }
}

.div-8 {
    color: #40D38D;
}

.div-9 {
    color: #72FBDA;
}

.div-10 {
    color: #52B6EE;
}

.div-11 {
    color: #5071E8;
}

.div-12 {
    color: #AC45C6;
}

.div-13 {
    color: #E481FD;
}

</style>
