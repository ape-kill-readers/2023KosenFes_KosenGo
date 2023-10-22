<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useQuizeDataStore } from "../store/QuizeData";
import { usePlayerLifeStore } from "@/store/PlayerLife";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useProgressCounterStore } from "@/store/QuizeProgressCounter";
import { useTimeUpStore, useTimesLeftStore } from "../store/TimeUp";

//store
const QuizeProgressCount = useProgressCounterStore();
const QuizeData = useQuizeDataStore();
const TimeUp = useTimeUpStore();
const TimesLeftStore = useTimesLeftStore();
const PlayerLife = usePlayerLifeStore();

//リアクティビリティ化したStore
const { ProgressCount } = storeToRefs(QuizeProgressCount);
const { TimesLeft } = storeToRefs(TimesLeftStore); //残り時間
const { isTimeUp } = storeToRefs(TimeUp);

//リアクティビリティ
const UserAnswer = ref("");
const JudgeResult = ref<HTMLParagraphElement | null>();
const QuizeTextAnimation = ref('')

//router
const router = useRouter();

//定数
const quizeLen = 3
const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus()
}

onBeforeUnmount(() => {
  clearInterval(timerObject);
});

onMounted(() => {
    for(let i = 1; i <= ProgressCount.value; i++) {
        const LiElm = document.getElementById("counter" + i) as HTMLElement
        LiElm.style.backgroundColor = "#000000"
    }

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
    PlayerLife.Decrement();

    if (PlayerLife.Count < 0) {
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

  for(let i = 1; i <= ProgressCount.value; i++) {
    const LiElm = document.getElementById("counter" + i) as HTMLElement
    LiElm.style.backgroundColor = "#000000"
  }
})

async function QuizeRetry(){
  try {
    
    QuizeTextAnimation.value = ""
    //ここにロード画面
    await QuizeData.QuizeFetch();
    if (JudgeResult.value) {
      JudgeResult.value.textContent = "";
    }

    resetTimer()
    
    QuizeTextAnimation.value = "quizeText"
    UserAnswer.value = "";
  }catch(err) {
    console.log(err)
    router.push("/error")
  }
  if (JudgeResult.value) {
    JudgeResult.value.textContent = "";
  }
  TimeUp.toFalse();
  TimesLeft.value = 15;
}

async function JudgeAnswer() {
  if (QuizeData.QuizeData.ans == UserAnswer.value) {
    if (JudgeResult.value) {
      JudgeResult.value.textContent = "正解！w";
    }

    try {
      QuizeTextAnimation.value = ""
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
  <div class="quize_header">
    <ul class="counter_list">
      <li v-for="loop in 3" :id="'counter'+ (loop)"><p>{{loop}}</p></li>
    </ul>
  </div>



  <div class="quize_main">
    <div class="statusDepartment">
      <div>
        <div class="ansTimeBox">
          <h2 class="ansTimeText">{{ TimesLeft }}</h2>
        </div>
        <div class="leftBox">
          <h2 class="leftText">残 {{ PlayerLife.Count }}</h2>
        </div>
      </div>
    </div>
    <div class="quizeDepartment">
      <div class="quizeField">
        <div class="quizeBox font-size-animation">
          <p  :class="QuizeTextAnimation" v-if="!TimeUp.isTimeUp">{{ QuizeData.QuizeData.que }}</p>
          <p v-if="TimeUp.isTimeUp">時間切れ！（笑）</p>
        </div>
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
    <input v-if="!TimeUp.isTimeUp" v-model="UserAnswer" @keydown.enter="JudgeAnswer()" class="user_answer_input" v-focus="vFocus" />
    <button v-else class="user_answer_input" @click="QuizeRetry()">
      リトライ
    </button>
    <p ref="JudgeResult" id="judge_result" class="judge_result"></p>
  </div>
</template>

<style lang="scss">
/* header */

.quize_header {
  height: 10vh;
  .counter_list {
    color: aqua;
    background-color:#D9D9D9;
    list-style: none;
    height: 100%;
    li {
      display: inline-block;
      background-color: #666;
      height: 100%;
      width: 10vh;
      line-height:10vh;
      font-size: large;
      text-align: center;
    }
  }
}

/* main */
.quize_main {
  height: 75vh;
  background-color: white;
  .statusDepartment {
    display: flex;
    flex-direction: row-reverse;
    .ansTimeBox {
      display: flex;
      background-color: #666666;
      align-items: center;
      justify-content: center;
      width: 10vh;
      height: 10vh;
      .ansTimeText {
        color: white;
      }
    }
    .leftBox {
      display: flex;
      background-color: #d9d9d9;
      align-items: center;
      justify-content: center;
      width: 10vh;
      height: 10vh;
      .leftText {
        color: black;
      }
    }
  }

  .animation-paused {
    animation-play-state: paused;
  }



  .quizeDepartment {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 13vh;
    .quizeField {
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      .quizeBox {
        display: flex;
        width: 75vh;
        height: 40vh;
        align-items: center;
        justify-content: center;
        background-color: #d9d9d9;
        word-wrap: break-word;
        overflow: hidden;
        .quizeText {
          width: 75vh;
          padding-right: 4vh;
          padding-left: 4vh;
          text-align: center;
          font-size: 4vh;
          color: red;

          animation: font-grow 17s linear;
          
          @keyframes font-grow {
          0% {
            font-size: 2vh;
          }
          100% {
            font-size: 8vh;
          }
        }
        }
      }
    }
  }
}

/* footer */

.quize_footer {
  display: block;
  height: 15vh;
  background-color: white;
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
</style>