<template>
    <div class="GameOver_text_field">
        <div class="GameOver_text_box">
            <p class="GameOver_text_content">GameOver</p>
        </div>
    </div>
</template>

<style lang="scss">

    .GameOver_text_field{
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


</style>