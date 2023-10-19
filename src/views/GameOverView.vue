<script setup lang="ts">
    import router from '@/router';
    import {usePlayerLifeStore} from '@/store/PlayerLife'
    import {useQuizeDataStore} from '@/store/QuizeData'
    import {useProgressCounterStore} from '@/store/QuizeProgressCounter'
    import {useTimeUpStore, useTimesLeftStore} from '@/store/TimeUp'

    const PlayerLifeStore = usePlayerLifeStore()
    const QuizeDataStore = useQuizeDataStore()
    const ProgressCounterStore = useProgressCounterStore()
    const TimeUpStore = useTimeUpStore()
    const TimesleftStore = useTimesLeftStore()
    function ReturnTop() {
        PlayerLifeStore.Init()
        QuizeDataStore.Init()
        ProgressCounterStore.Init()
        TimeUpStore.Init()
        TimesleftStore.Init()

        router.push("/")
    }
</script>

<template>
    <div class="GameOver_main">
        <div class="GameOver_text_field">
            <div class="GameOver_text_box">
                <p class="GameOver_text_content">GameOver</p>
            </div>
        </div>
    </div>

    <div class="GameOver_footer">
        <button class="return_top" @click="ReturnTop()" >トップへ戻る</button>
    </div>
</template>

<style lang="scss">

/* main */
.GameOver_main {
    height: 85vh;
    background-color: white;
    .GameOver_text_field {
        display: flex;
        align-items: center;
        justify-content: center;
        .GameOver_text_box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120vh;
            height: 60vh;
            margin-top: 5vh;
            background-color: white;
            word-wrap: break-word;
            overflow: hidden;

            .GameOver_text_content{
                width: 75vh;
                padding-right: 4vh;
                padding-left: 4vh;
                text-align: center;
                font-size: 4vh;
                color: red;
            }
        }
    }
}

.GameOver_footer {
    display:block;
    height: 15vh;
    background-color: white;
    .return_top {   
        all: unset; 
        width: 50%;
        height: 50%;
        margin-left: 25%;
        text-align: center;
        background-color: #d9d9d9;
        font-size: 4vh;
        color: black
    }
}
</style>