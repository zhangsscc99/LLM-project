import { defineStore } from "pinia";
import { conversationType, sendMessageType, serverDataType, TextContent, ServerSearchGoodsType } from "@/types/index";
import { chatMessageApi, queryTrainTickets, queryWeather, searchGoods } from "@/api/request";

export const chatbotMessage = defineStore('chatbotMessage', {
    state:()=>({
        messages:[] as conversationType, // 存储聊天记录
        searchGoodsData:[] as ServerSearchGoodsType, // 临时存储商品数据
        prohibit:false,//对话进行中， 禁用其他按钮
        userScrolled:false//如果用户下拉页面，就不在自动滚动

    }),
    actions:{
        // 发送消息
        async sendMessage(content:sendMessageType){
            this.messages.push({role:'user', content})
            this.messages.push({role:'assistant', content:'', progress:true})
            this.prohibit = true; // 禁用其他按钮点击
            this.userScrolled = false; // 用户下拉页面，就不在自动滚动
            
            // 搜索商品
            let userMessages = '' 
            const userMessagesType = this.messages[this.messages.length - 2].content 
            if (typeof userMessagesType === 'string'){
                userMessages = userMessagesType
            }else{
                userMessages = (userMessagesType[0] as TextContent).text
            }
            searchGoods({userMessages}).then(res=>{
                console.log('搜索商品');
                console.log(res);
                this.searchGoodsData = res.data;

            })
            // 请求服务器端，大模型对话
            await chatMessageApi({chatMessage:this.messages})
            console.log('对话完毕了');
            // 等到对话完毕再来赋值商品数据
            this.messages[this.messages.length - 1]["searchGoodsData"] = this.searchGoodsData;
            this.prohibit = false//放开按钮点击
            



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
                    const { departure, destination, date } = res.data
                    aiMessages.content = `正在为你查询${departure}到${destination}${date}出发的火车票`
                    const queryRes = await queryTrainTickets({ departure, destination, date })
                    console.log(queryRes)
                    // 考虑没有查询到
                    if (queryRes.serviceCode == 200){
                        aiMessages.content = `以下是为你查询到的${departure}到${destination}${date}出发的火车票信息`
                        aiMessages["toolData"] = queryRes.data
                        aiMessages["functionName"] = "trainTickets"

                    }else{
                        aiMessages.content = queryRes.msg
                    }
                }
                // 查询天气
                if (res.functionName === "getWeather"){
                    const { city } = res.data
                    aiMessages.content = `正在为你查询${city}的天气情况`;
                    const queryRes = await queryWeather({ city });
                    console.log(queryRes);
                    // 考虑没有查询到
                    if (queryRes.serviceCode == 200){
                        aiMessages.content = `以下是为你查询到的${city}的天气情况`
                        aiMessages["toolData"] = queryRes.data
                        aiMessages["functionName"] = "getWeather"

                    }else{
                        aiMessages.content = queryRes.msg
                    }
                    // console.log(queryRes)
                }
            }
            // 沒有工具调用
            if (res.type && res.type === "content"){
                aiMessages.content += res.data;

            }
        }
    }
})