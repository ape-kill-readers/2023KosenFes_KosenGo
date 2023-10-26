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

//store
const QuizeProgressCount = useProgressCounterStore();
const QuizeData = useQuizeDataStore();
const TimeUp = useTimeUpStore();
const TimesLeftStore = useTimesLeftStore();
const PlayerLife = usePlayerLifeStore();
const el = ref<HTMLInputElement | null>(null)
const IsInputActive = ref<boolean>(true);

//リアクティビリティ化したStore
const { ProgressCount } = storeToRefs(QuizeProgressCount);
const { TimesLeft } = storeToRefs(TimesLeftStore); //残り時間
const { isTimeUp } = storeToRefs(TimeUp);

//リアクティビリティ
const UserAnswer = ref("");
const JudgeResult = ref<HTMLParagraphElement | null>();
const QuizeTextAnimation = ref('');
const PreviousUserAnswer = ref('');
const questionImages = [question1, question2, question3, question4];

//router
const router = useRouter();

//定数
const quizeLen = 4
const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus()
}

watch(IsInputActive, () => {
    if(!(IsInputActive.value)) {
        console.log("dddd")
        IsInputActive.value = true
        el.value?.focus()
        if(el.value?.textContent) {
            console.log("dddddsjlsjflsdf")
            el.value.textContent = "dddd"
        }
    }
})

watch(isTimeUp, () => {
  router.push("/timeup")
})

onBeforeUnmount(() => {
  clearInterval(timerObject);
});

onMounted(() => {
    QuizeTextAnimation.value = "quizeText"
})

//残り時間制御
let timerObject: number;

timerObject = Number(setInterval(countDown, 1000));

function countDown() {
  if (TimesLeft.value) {
    TimesLeft.value--;
  } else {
    clearInterval(timerObject);

    TimeUp.toTrue();

    if (PlayerLife.Count < 1) {
      PlayerLife.IsNothingToTrue();
      router.push("/GameOver");
    }
  }
}
//時間制御終了

watch(ProgressCount, () => {
  if (ProgressCount.value == (quizeLen + 1)){
    router.push('/finished')
  }

})

async function QuizeRetry(){
  try {
    
    PreviousUserAnswer.value = "";
    QuizeTextAnimation.value = "";
    //ここにロード画面
    await QuizeData.QuizeFetch();
    if (JudgeResult.value) {
      JudgeResult.value.textContent = "";
    }

    resetTimer()
    
    PlayerLife.Decrement();
    QuizeTextAnimation.value = "quizeText"
    UserAnswer.value = "";
  }catch(err) {
    console.log(err)
    router.push("/error")
  }
  if (JudgeResult.value) {
    JudgeResult.value.textContent = "";
  }
}

async function JudgeAnswer() {
  if (QuizeData.QuizeData.ans == UserAnswer.value) {
    if (JudgeResult.value) {
      JudgeResult.value.textContent = "正解！w";
    }

    try {
      PreviousUserAnswer.value = "";
      QuizeTextAnimation.value = "";
      //ここにロード画面

      await QuizeData.QuizeFetch();
      QuizeProgressCount.Increment();
      UserAnswer.value = "";
    
      resetTimer()
      QuizeTextAnimation.value = "quizeText"

    }catch(err) {
      console.log(err)
      router.push("/error")
    }

  } else {
    if (JudgeResult.value) {
      JudgeResult.value.textContent = "ざんねん！w";
    }
    PreviousUserAnswer.value = UserAnswer.value;
    UserAnswer.value = "";

    console.log(JudgeResult.value);
  }
}

function resetTimer() {
  TimesLeft.value = 15;
  clearInterval(timerObject);
  timerObject = Number(setInterval(countDown, 1000));
  TimeUp.toFalse();
}
</script>

<template>
  <div class="container">
    <div>
      <div class="quize_header">
        <ul class="counter_list">
          <img class="quize_img" v-if="!TimeUp.isTimeUp" :src="questionImages[ProgressCount - 1]" />
        </ul>
      </div>



      <div class="quize_main">
        <div class="statusDepartment">
          <div class="leftField">
            <div class="leftBox">
              <img class="love_img" src="@/assets/love.png">
              <p class="leftText">×{{ PlayerLife.Count }}</p>
            </div>
          </div>
        </div>
        <div class="quizeDepartment">
          <p :class="QuizeTextAnimation" v-if="!TimeUp.isTimeUp">{{ QuizeData.QuizeData.que }}</p>
          <p v-if="TimeUp.isTimeUp">時間切れ！（笑）</p>
          <div v-if="!TimeUp.isTimeUp && PreviousUserAnswer" class="previousBox">
            <p class="previousAnswer">直前の解答</p>
            <p class="previousText">{{ PreviousUserAnswer }}</p>
          </div>
        </div>
      </div>

      <!--button @click="QuizeProgressCount.Increment()">ss</button-->
      <!--button @click="() => {
            QuizeProgressCount.ProgressCountReset()
        }">reset</button-->


      <div class="quize_footer">
        <div class="press_enter_view">
          <text class="press_enter_text"></text>
        </div>
        <input v-if="!TimeUp.isTimeUp" ref="el" maxlength="10" v-model="UserAnswer" @keydown.enter="JudgeAnswer()"  @blur="IsInputActive = false"  class="user_answer_input" v-focus="vFocus" />
        <button v-else class="user_answer_input" @click="QuizeRetry()">
          リトライ
        </button>
        <p ref="JudgeResult" id="judge_result" class="judge_result"></p>
      </div>
    </div>
    <div v-if="!TimeUp.isTimeUp && (TimesLeft.valueOf() < 6)" class="warningTimer">
      <div v-if="(TimesLeft.valueOf() < 5)" class="countdown">{{ TimesLeft + 1 }}</div>
    </div>
    <div v-if="!TimeUp.isTimeUp" :class="{'warning': TimesLeft.valueOf() <= 5}"></div>
  </div>
</template>

<style lang="scss" scoped>
/* header */

.quize_header {
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
.quize_main {
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

  .animation-paused {
    animation-play-state: paused;
  }



  .quizeDepartment {
    display: flex;
    align-items: center;
    justify-content: center;   
    .quizeText {
      text-align: center;
      font-size: 4vh;
      color: #F0D026;
      -webkit-text-stroke: 3px black;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      font-weight: bold;
      position: absolute;
      margin-top: 40vh;

      animation: font-grow 17s linear;
      
      @keyframes font-grow {
        0% {
          font-size: 4vw;
        }
        100% {
          font-size: 14vw;
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
}

/* footer */

.quize_footer {
  display: block;
  height: 15vh;
  background-color: white;
  width: 100vw;
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