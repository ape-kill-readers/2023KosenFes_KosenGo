<script setup lang="ts">

import { ref, onBeforeUnmount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia"
import {usePlayerLifeStore} from '@/store/PlayerLife'
import {useQuizeDataStore} from '@/store/QuizeData'
import {useProgressCounterStore} from '@/store/QuizeProgressCounter'
import {useTimeUpStore, useTimesLeftStore} from '@/store/TimeUp'
import GameOverText from '../components/GameOverText.vue'

const router = useRouter();

const PlayerLifeStore = usePlayerLifeStore()
const QuizeDataStore = useQuizeDataStore()
const ProgressCounterStore = useProgressCounterStore()
const TimeUpStore = useTimeUpStore()
const TimesleftStore = useTimesLeftStore()

const { QuizeData } = storeToRefs(QuizeDataStore)

const AnimationIntervalId = ref<NodeJS.Timeout>() //フェードイン時のアニメーションの秒数を管理するrefs
const FadeInFlag = ref<boolean>(true)
const ModelAnswerFlag = ref<boolean>(false)

let IntervalCount: number = 1

onBeforeUnmount(() => {
  clearInterval(AnimationIntervalId.value)    
})

onMounted(() => {
	AnimationIntervalId.value = setInterval(AnimationInterval, 1000)  
	
	console.log('1' + QuizeData.value.ans)
	console.log('2' + QuizeData.value.que)
})

function AnimationInterval() {
	//1秒後→case 1
	//3秒後→case 3
	switch(IntervalCount) {
		case 1: 
			FadeInFlag.value = false
			break;
		case 5:
			ModelAnswerFlag.value = true
			break;
	}

	console.log(IntervalCount)

	IntervalCount++;
}

function toStartView() {
    PlayerLifeStore.Init()
    QuizeDataStore.Init()
    ProgressCounterStore.Init()
    TimeUpStore.Init()
    TimesleftStore.Init()

		ModelAnswerFlag.value = false;
    router.push("/")  
}
</script>

<template>
  <div class="container">
    <div class="finish_content">
      <div class="finish_main">
        <div class="div game_over">	
					<div class="quizeDepartment" v-if="ModelAnswerFlag">
						<div class="QuestionBox">
							<div class="QuestionContent">
								<p class="QuestionContentText">{{QuizeData.que}}</p>
							</div>
						</div>
						<div class="borderline">
						</div>
						<div class="AnswerBox">
								<div class="AnswerContent">
									<p class="AnswerContentHeading">正答</p>
									<p class="AnswerContentText">{{QuizeData.ans}}</p>
								</div>
						</div>
					</div>
					<GameOverText v-else/>
        </div>
      </div>
      <div class="finish_footer">
        <div class="Retry-field" v-if="ModelAnswerFlag">
          <div class="Retry-button" @click="toStartView">   
            <div class="text">リトライ</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="FadeInFlag" class="from_quize"></div>
  </div>
</template>

<style lang="scss" scoped>

.container {
  display: flex;
}

/* main */

.finish_main {
	display: flex;
	align-content: center;
	justify-content: center;
  height: 85vh;
  width: 100vw;
  background-color: black;
  .div {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
	.quizeDepartment {
    display: flex;
    align-items: center;
    justify-content: center;   
    .AnswerBox {
        margin-top: 16px;
        height: 45vh;
        width: 35vw ;
        background-color: rgba($color: #ffffff, $alpha: 0.4);
        text-align: center;
        display: flex;
        justify-content: center;
      .AnswerContent{
        color: rgba($color: #000, $alpha: 1.0);
        margin: auto;
        .AnswerContentText{
          color: #FFF;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          font-weight: bold;
          font-size: 6vh;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
          text-shadow: 1px 1px 0 #000,-1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000;
        }
        .AnswerContentHeading{
          color: #2D9CEC;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          font-weight: bold;
          font-size: 5.5vh;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
          text-shadow: 1px 1px 0 #000,-1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000;
        }
      }
    }
    .borderline{
        margin-top: 16px;
        height: 45vh;
        width: 3px;
        background-color: #000;
    }
    .QuestionBox{
        margin-top: 16px;
        height: 45vh;
        width:35vw;
        background-color: rgba($color: #ffffff, $alpha: 0.4);
        text-align: center;
        display: flex;
        justify-content: center;
        .QuestionContent{
            color: rgba($color: #000000, $alpha: 1.0);
            margin: auto;
            .QuestionContentText{
              color: #FFF;
              font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
              font-weight: bold;
              font-size: 6vh;
              font-style: normal;
              font-weight: 800;
              line-height: normal;
              text-shadow: 1px 1px 0 #000,-1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000;
            }
            
        }
    }
	}
}

/* footer */
.finish_footer {
  height: 15vh;
  width: 100vw;
  background-color: black;
  .Retry-field {
    display: flex;
    justify-content: center;
    align-content: center;
    .Retry-button {
      display: flex;
      justify-content: center;
      width: 35vw;
      height: 10vh;
      background-color: #999;
      border-radius: 5vh;
      .text {
        margin-top: 2.5vh;
        font-size: 3.3vh;
        text-align: center;
        color: black;
      }
    }
  }
}

/* animation */
.from_quize {
  display: flex;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;

  animation-name: fade-out;
  animation-duration: 1200ms;
}

.game_over {
	animation-name: fade-in;
	animation-duration: 1200ms;
	animation-delay: 1200ms;
	animation-fill-mode: both;
	animation-timing-function: linear;
}

@keyframes fade-out {
    0% { opacity: 1 }
    50% { opacity: 1 }
    100% { opacity: 0 }
}

@keyframes fade-in {
	0% { opacity: 0 }
	50% { opacity: 0.3 }
	100% { opacity: 1}
}


</style>
