<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useQuizeDataStore } from "../store/QuizeData";
import { usePlayerLifeStore } from "@/store/PlayerLife";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useProgressCounterStore } from "@/store/QuizeProgressCounter";
import { useTimeUpStore, useTimesLeftStore } from "../store/TimeUp";
import question1 from '@/assets/question1.png';
import question2 from '@/assets/question2.png';
import question3 from '@/assets/question3.png';
import question4 from '@/assets/question4.png';
import router from "@/router";

//store
const TimeUpStore = useTimeUpStore();
const QuizeProgressCount = useProgressCounterStore();
const PlayerLifeStore = usePlayerLifeStore();
const TimesLeftStore = useTimesLeftStore();
const QuizeDataStore = useQuizeDataStore();


const questionImages = [question1, question2, question3, question4];
const { ProgressCount } = storeToRefs(QuizeProgressCount);
const {isTimeUp} = storeToRefs(TimeUpStore)
const {QuizeData} = storeToRefs(QuizeDataStore)
watch(isTimeUp, () => {
  router.push("/quize")
})

async function QuizeRetry(){
  try {
    //ここにロード画面
    await QuizeDataStore.QuizeFetch();

    TimesLeftStore.resetTimer()
    router.push("/quize")
  }catch(err) {
    console.log(err)
    router.push("/error")
  }
}
</script>

<template>
    <div class="container">
        <div>
          <div class="timeup_header">
            <ul class="counter_list">
              <img class="quize_img" v-if="!TimeUpStore.isTimeUp" :src="questionImages[ProgressCount - 1]" />
            </ul>
          </div>

          <div class="timeup_main">
            <div class="statusDepartment">
              <div class="leftField">
                <div class="leftBox">
                  <img class="love_img" src="@/assets/love.png">
                  <p class="leftText">×{{ PlayerLifeStore.Count }}</p>
                </div>
              </div>
            </div>
            <div class="quizeDepartment">
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
          </div>

          <div class="timeup_footer">
            <button class="retry_button" @click="QuizeRetry()">リトライ</button>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* header */

.timeup_header {
  height: 10vh;
  width: 100vw;
  .counter_list {
    background-color:#D9D9D9;
    list-style: none;
    height: 100%;
    .quize_img {
      display: flex;
      height: 100%;
      width: 50vh;
      line-height:10vh;
    }
  }
}

/* main */
.timeup_main {
  height: 75vh;
  background-color: white;
  width: 100vw;
  .statusDepartment {
    display: flex;
    flex-direction: row-reverse;
    .leftBox {
      display: flex;
      background-color: #d9d9d9;
      align-items: center;
      justify-content: center;
      width: 25vh;
      height: 10vh;
      margin-right: 5vh;
      margin-top: 10vh;
      transform: skewX(-10deg);/*平行四辺形の角度*/
    }
    .leftText {
      color: white;
      -webkit-text-stroke: 2px black;
      font-size: 8vh;
      font-weight: bold;
      margin-left: 80px;
      letter-spacing: 10px;
      transform: skewX(10deg)
    }
    .love_img {
      width: 120px;
      height: 120px;
      position: absolute;
      margin-right: 120px;
      transform: skewX(10deg)
    }
  }
  .quizeDepartment {
    display: flex;
    align-items: center;
    justify-content: center;   

    .AnswerBox {
        margin-top: 16px;
        height: 45vh;
        width: 35vw ;
        background-color: rgba($color: #000000, $alpha: 0.4);
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
        background-color: rgba($color: #000, $alpha: 0.4);
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
    
    .previousBox {
      display: flex;
      justify-content: center;
      margin-top: 80vh;
      background-color: #D9D9D9;
      opacity: 1;
      position: absolute;
      margin-top: 100vh;
      width: 40vw;
      height: 13vh;
      .previousAnswer {
        color: #2D9CEC;
        -webkit-text-stroke: 1.4px black;
        font-weight: 1000;
        text-align: center;
        font-size: 3vh;
      }
      .previousText {
        color: #fff;
        -webkit-text-stroke: 3px black;
        font-weight: 1000;
        font-size: 6vh;
        position: absolute;
        margin-top: 3vh;
      }
    }
  }

/* footer */

.timeup_footer {
  display: block;
  height: 15vh;
  background-color: white;
  width: 100vw;

  .retry_button {
    height: 60% ;
    width: 20%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    background-color: #feb11c;
    color: #fff;
    border: #000 solid 2px;
    text-align: center;
    font-family: Inter;
    font-size: 5vh;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-shadow: 1px 1px 0 #000,-1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000;
  }
  .press_enter_view {
    width: 50%;
    height: 15%;
    margin-bottom: 10px;
    text-align: end;
    margin-left: 30%;
    .press_enter_text {
      color: black;
      font-size: 2.5vh;
    }
  }
  .user_answer_input {
    all: unset; 
    width: 50%;
    height: 50%;
    margin-left: 25%;
    text-align: center;
    background-color: #d9d9d9;
    font-size: 4vh;
    color: black
  }
  .judge_result {
    color: black;
  }
}

/*Flash animation*/ 
.container {
  display: flex;
  justify-content: center;
  .warningTimer {
    display: flex;
    position: absolute;
    align-content: center;
    justify-content: center;
    width: 10vw;
    height: 15vh;
    background-color: rgb(242, 54, 54);
    animation: pullDown 1s linear;
    animation-fill-mode: backwards;

    @keyframes pullDown {
      0% {
        transform: translateY(-100%); /* 上から降りてくるアニメーション */
      }
      100% {
        transform: translateY(0);
      }
    }

    .countdown {
      display: flex;
      position: absolute;
      color: white;
      text-align: center;
      font-size: 5vh;
      animation: countdown-animation 1s linear 5; /* カウントダウン用のアニメーション */
      @keyframes countdown-animation {
        0% {
          transform: translateY(0);
          font-size: 5vh;
        }
        50% {
          transform: translateY(0);
          font-size: 10vh;
        }
        100% {
          transform: translateY(0);
          font-size: 5vh;
        }
      }
    }
  }

  .warning {
    display: flex;
    animation: flash 1s linear infinite;
    background-color: red;
    width: 100vw;
    height: 100vh;
    position: absolute;

    @keyframes flash {
      0% { opacity: 0 }
      25% { opacity: 0.125 }
      50% { opacity: 0.25 }
      75% { opacity: 0.125 }
      100% { opacity: 0 }
    }
  }
}

</style>