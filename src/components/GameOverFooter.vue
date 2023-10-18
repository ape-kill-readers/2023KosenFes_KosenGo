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
    <div class="press_enter_view">
        <text class="press_enter_text"></text>
    </div>
    <button class="return_top" @click="ReturnTop()" >トップへ戻る</button>
</template>

<style lang="scss">
    .return_top {   
        width: 30%;
        height: 30%;
        margin: 10px;
    }
    .press_enter_text {
        color: black;
        font-size: 2.5vh;
    }
    .press_enter_view {
        width: 50%;
        height: 15%;
        margin-bottom: 10px;
        text-align: end;
        margin-left: 30%;
    }
    .footer {
        display:block;
        background-color: white;
    }
    .judge_result {
        color: black;
    }
</style>