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
  padding-right: 20px;
  padding-left: 20px;
}
.div-2 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-2 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-3 {
  display: flex;
  margin-top: 2px;
  flex-grow: 1;
  align-items: flex-start;
  gap: 3%;
}
@media (max-width: 991px) {
  .div-3 {
    margin-top: 50px;
    justify-content: center;
  }
}
.div-4 {
  justify-content: center;
  color: rgba(254, 173, 15, 0.76);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  width: 128px;
}
@media (max-width: 991px) {
  .div-4 {
    font-size: 40px;
  }
}
.div-5 {
  justify-content: center;
  color: rgba(243, 235, 36, 0.87);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  width: 128px;
}
@media (max-width: 991px) {
  .div-5 {
    font-size: 40px;
  }
}
.div-6 {
  justify-content: center;
  color: #caf324;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  width: 128px;
}
@media (max-width: 991px) {
  .div-6 {
    font-size: 40px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 66%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-7 {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  gap: 9px;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-8 {
  justify-content: center;
  color: #40d38d;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  width: 128px;
}
@media (max-width: 991px) {
  .div-8 {
    font-size: 40px;
  }
}
.div-9 {
  justify-content: center;
  color: #72fbda;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  margin-top: 2px;
  width: 128px;
}
@media (max-width: 991px) {
  .div-9 {
    font-size: 40px;
  }
}
.div-10 {
  justify-content: center;
  color: #52b6ee;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  margin-top: 2px;
  width: 128px;
}
@media (max-width: 991px) {
  .div-10 {
    font-size: 40px;
  }
}
.div-11 {
  justify-content: center;
  color: #5071e8;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  margin-top: 2px;
  width: 128px;
}
@media (max-width: 991px) {
  .div-11 {
    font-size: 40px;
  }
}
.div-12 {
  justify-content: center;
  color: #ac45c6;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  margin-top: 2px;
  width: 128px;
}
@media (max-width: 991px) {
  .div-12 {
    font-size: 40px;
  }
}
.div-13 {
  justify-content: center;
  color: #e481fd;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 200px;
  font-weight: 700;
  align-self: stretch;
  margin-top: 2px;
  width: 128px;
}
@media (max-width: 991px) {
  .div-13 {
    font-size: 40px;
  }
}
</style>
