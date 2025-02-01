<template>
    <div class="chat-message">
        <div class="user-message">
            <p>用户发送的文本</p>
        </div>
        <div class="send-image">
            <van-image
        width="120px"
        height="120px"
        radius="5"
        fit="cover"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        </div>
        <div class="ai-message">
            <div class="mark-text">大模型回复</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .chat-message{
        display: flex;
        flex-direction: column;
        .user-message{
            margin-top: 15px;
            max-width: 70%;
            align-self: flex-end;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.2s ease-in-out forwards;
            p{
                font-size: 16px;
                line-height: 1.5;
                background-color: #3a71e8;
                border-bottom-left-radius: 10px;
                border-top-left-radius: 10px;
                border-bottom-right-radius: 10px; 
                color: #ffffff;
                padding: 5px;
            }
        }
        .send-image{
            display: flex;
            flex-direction: column;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.2s ease-in-out forwards;
            .van-image{
                align-self: flex-end;
                margin-top: 4px;
            }
            
        }
    }
    @keyframes fadeUp{
        0%{
            opacity: 0;
            transform: translateY(20px);

        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .ai-message{
        margin-top: 15px;
        align-self: flex-start;
        .mark-text{
            font-size: 16px;
            line-height: 1.5;
            background-color: #ffffff;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            color: #333;
            padding: 5px;
        }
    }


</style>
