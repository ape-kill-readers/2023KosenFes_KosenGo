<script setup lang="ts">
import { ref, onBeforeUnmount, nextTick, watch } from 'vue';
import {useQuizeDataStore} from '../store/QuizeData'
import { useRouter } from 'vue-router';

const router = useRouter()

const QuizeData = useQuizeDataStore()

const UserAnswer = ref('')
const RoutingAnimation = ref('') //こいつにクラス名を参照させる
const el = ref<HTMLInputElement | null>(null)
const IsInputActive = ref<boolean>(true);

const modeList = [{"DisplayName":"ノーマル", "ModeName":"normal"},
                  {"DisplayName":"高専生用", "ModeName":"Student"},
                  {"DisplayName":"げきむず", "ModeName":"Gekimuzu"},
                  {"DisplayName":"error", "ModeName":"QU"},
                  {"DisplayName":"かんたん", "ModeName":"easy"}];
let modeListIndex = 0;

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

const ModeDownShift = () => {
    modeListIndex++;
    if(modeListIndex == modeList.length) {
        modeListIndex = 0;
    }

    UserAnswer.value = modeList[modeListIndex].DisplayName
    QuizeData.mode = modeList[modeListIndex].ModeName
}

const ModeUpShift = () => {
    modeListIndex--;
    if(modeListIndex == -1) {
        modeListIndex = modeList.length - 1;
    }

    UserAnswer.value = modeList[modeListIndex].DisplayName
    QuizeData.mode = modeList[modeListIndex].ModeName
}

let RoutingAnimationIntervalId: NodeJS.Timeout

onBeforeUnmount(() => {
    clearInterval(RoutingAnimationIntervalId)    
})

function animationInterval () {
    router.push('/quize')
    clearInterval(RoutingAnimationIntervalId)   
}

async function TransitionQuizeView() {


    try {
        console.log("aaaaddd")
        await QuizeData.ModeReset()
    } catch(error) {
        console.log("aaaaaaa")
    }
    try {

        RoutingAnimation.value = 'to_load'
        //ここにロード画面
        await QuizeData.QuizeFetch()
        RoutingAnimationIntervalId = setInterval(animationInterval, 1000)   
        console.log("Loading")
    }catch (err) {
        console.log("問題をfetchできませんでした")
        router.push("/error")
    }
}

const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus()
}


</script>

<template>
    <div class="container">
        <div class="start-content">
            <div class="start_main">
                <div class="explain_view">
                    <div class="explain_box">
                        <img src="@/assets/KosenGo.png" />
                    </div>
                </div>
            </div>
            <div class="start_footer">
                <div class="press_enter_text">文字入力ができる状態でEnterキーを押してね</div>
                <input ref="el" v-model="UserAnswer" @keydown.enter="TransitionQuizeView" @keydown.up="ModeUpShift()" @keydown.down="ModeDownShift()" @blur="IsInputActive = false"  class="user_answer_input" v-focus>
            </div>
        </div>
        <div :class="RoutingAnimation" v-if="RoutingAnimation">
            <div class="loading_box">
                <div class="loading_text">ロード中...</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
}

/* header */
.start_header {
    height: 15vh;
    width: 100vw;
    background-color: #D9D9D9;
    
    .header_content{
        color: white;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 10vh;
        font-weight: bold;
        text-align: center; 
        text-shadow: 0px 4px 4px black;
        -webkit-text-stroke: 1.5px;
        -webkit-text-stroke-color: black;
    }
}

/* main */
.start_main {
    background-color: white;
    height: 80vh;
    width: 100vw;
    .explain_view {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .explain_box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120vh;
        height: 60vh;
        margin-top: 5vh;
        background-color: white;
        word-wrap: break-word;
        overflow: hidden;
    }
}

/* footer */
.start_footer {
    display: block;
    height: 20vh;
    width: 100vw;
    background-color: white;

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
    .press_enter_text {
        color: black;
        font-size: 2.5vh;
        margin-left: 25%;
        margin-right: 25%;
        text-align: center;
    }
}

/* Routing Animation */
.to_load {
    display: flex;
    position: absolute;
    align-items: end;
    justify-content: end;
    height: 100vh;
    width: 100vw;
    background-color: white;

    @keyframes increaseOpacity {
        0% { opacity: 0 }
        50% { opacity: 1 }
    }
    animation-name: increaseOpacity;
    animation-duration: 1.5s;

    .loading_box {
        .loading_text {
            color: black;
            margin-bottom: 2vh;
            margin-right: 2vw;
            font-size: 5vw;
        }
    }
}


</style>