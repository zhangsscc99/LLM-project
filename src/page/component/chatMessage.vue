<template>
    <div class="chat-message" v-for="(item, index) in store.messages" :key="index">
        <div class="user-message" v-if="item.role === 'user'">
            <p v-if="Array.isArray(item.content)">{{ (item.content[0] as TextContent).text }}</p>
            <p v-else>{{ item.content }}</p>
        </div>
        <div class="send-image" v-if="item.role === 'user' && Array.isArray(item.content)">
            <van-image width="120px" height="120px" radius="5" fit="cover" :src="(item.content[1] as ImageContent).image_url.url"/>
        </div>
        <div class="ai-message" v-if="item.role == 'assistant'">
            <div class="mark-text" v-if="!item.progress" v-html="marked(item.content as string)"></div>
             <div class="mark-text" v-if="item.progress">
                <loadIng></loadIng>
             </div>
        </div>
        <queryTrainTickets v-if="item.role == 'assistant' && item.functionName == 'trainTickets'"
        :function-data="item.toolData"></queryTrainTickets>
        <weather v-if="item.role == 'assistant' && item.functionName == 'getWeather'" :function-data="item.toolData"></weather>
       <searchGoods v-if="item.role == 'assistant' && item.searchGoodsData && item.searchGoodsData.length > 0" :search-goods-data="item.searchGoodsData"></searchGoods> 
    </div>  
</template>

<script setup lang="ts">
//loading加载
import loadIng from '@/page/component/loadIng.vue'
//火车票查询组件
import queryTrainTickets from '@/page/toolComponents/queryTrainTickets.vue'
import weather from "@/page/toolComponents/weather.vue"
import searchGoods from "@/page/toolComponents/searchGoods.vue"
import { chatbotMessage } from "@/store/index"
const store = chatbotMessage()
import { TextContent, ImageContent } from "@/types/index"
import { marked} from "marked";
</script>


<style scoped lang="less">
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
