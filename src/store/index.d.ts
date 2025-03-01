import { defineStore } from "pinia";
import { conversationType, sendMessageType, serverDataType } from "@/types/index";
import { chatMessageApi } from "@/api/request";

export const chatbotMessage = defineStore('chatbotMessage', {
    state:()=>({
        messages:[] as conversationType // 存储聊天记录
    }),
    actions:{
        // 发送消息
        async sendMessage(content:sendMessageType){
            this.messages.push({role:'user', content})
            this.messages.push({role:'assistant', content:'', progress:true})
            // 请求服务器端
            await chatMessageApi({chatMessage:this.messages})
            console.log('对话完毕了');



        },
        // 接收服务器端返回的消息
        async serverData(res:serverDataType){
            let aiMessages = this.messages[this.messages.length - 1]
            // 关闭loading加载
            aiMessages.progress = false 
            // 如果有工具调用
            if (res.type && res.type === "function"){
                aiMessages['type'] = 'function'
                // 查询火车票
                if (res.functionName === "trainTickets"){
                    const {departure, destination, date} = res.data
                    aiMessages.content = `正在为你查询${departure}到${destination}${date}出发的火车票`
                    // 
                }
            }
        }
    }
})