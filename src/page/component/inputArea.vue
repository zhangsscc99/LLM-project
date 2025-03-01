<template>
    <div class="input-container">
        <!-- <van-uploader v-model="fileList" :max-count="1" preview-size="60" disabled /> -->
        <div class="data-query">
            <van-button size="small" type="default">查询火车票</van-button>
            <van-button size="small" type="default">查询天气</van-button>
            <van-uploader>
                <van-button size="small" type="default">图片问答</van-button>
            </van-uploader>
            <van-uploader>
                <van-button size="small" type="default">一键投诉</van-button>
            </van-uploader>

        </div>
        <div class="input-box-area">
            <img src="@/assets/qingchu.png" alt="">
            <van-field class="input-content" type="textarea" placeholder="请输入询问内容" :border="false"></van-field>
            <van-button class="send-button" size="small" type="default" @click="sendMessage">发送</van-button>

        </div>

    </div>
    

</template>

<script setup lang="ts">
import { ref } from 'vue';
const fileList = ref([{url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg'}]);
// import { chatMessageApi } from "@/api/request";
import { chatbotMessage} from "@/store/index";
const store = chatbotMessage()

const sendMessage = () => {
    store.sendMessage('帮我查询昆明到大理的火车票')

    // chatMessageApi({
    //     chatMessage:[{role:'user', content:"查询昆明到大理的车票， 2024年11月24的"}]
    // })
}

</script>

<style scoped lang="less">
.input-container{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /deep/.van-uploader__wrapper--disabled{
        opacity: inherit;
        margin-left: 15px;
        .van-uploader_preview{
            background-color: #ffffff;
        }
    }
    .data-query{
        display: flex;
        align-items: center;
        .van-button{
            margin-left: 15px;
            margin-bottom: 15px;
        }

    }
    .input-box-area{
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        padding-top: 5px;
        img{
            width: 27px;
            height: 27px;
            margin: 0 10px;

        }
        .input-content{
            background-color: #f8f9fd;
            flex: 1;
            border-radius: 10px;
            padding: 6px;
            
        }
        .send-button{
            border: none;
            font-size: 15px;
            color: #3a71e8;
            font-weight: bold;
            margin: 0 5px;

        }
    }
}

</style>
