import { 
    chatMessageType, 
    conversationType, 
    QueryTrainTicketsType, 
    ServerQueryTrainTicketsType, 
    QueryWeatherType, 
    ServerQueryWeatherType, 
    SearchGoodsType, 
    ServerSearchGoodsType,
    ServerGoodsDetails,
    AddComplaintType,
    
} from "@/types/index"
const requestUrl = "http://127.0.0.1:7000"
import { chatbotMessage } from "@/store/index"
import { showToast, showLoadingToast } from "vant";

// fetch请求
const fetchApi = async(url:string, method:"POST" | "GET", body?:any, resType="seream", reqType="json")=>{
    const headers:HeadersInit={
        ...(reqType == 'json' && {"Content-Type":"application/json"})
    }
    let bodyData = null 
    if(reqType == 'json'){
        bodyData = JSON.stringify(body)
    }else if(method == 'GET'){
        bodyData = null
    }else{
        bodyData = body
    }
    const options:RequestInit = {
        method,
        headers, 
        body:bodyData
    }
    const response = await fetch(url, options)
    console.log(response)
    // 非流式输出
    if (response.ok && resType != 'seream'){
        const result: any = response.json 
        return result 
    }
    // 请求失败的错误
    if (!response.ok) {
        const errorData = await response.json();
        const status = response.status;
        switch (status) {
            case 404:
                console.error("404错误");
                break;
            case 500:
            case 501:
            case 502:
                console.error("发生异常错误");
                showToast({ message: "出现异常错误罗", duration: 1000 });
                break;
            case 400:
                console.error("参数不对");
                break;
            case 422:
                console.error("参数不对");
                showToast({ message: errorData.msg, duration: 1000 });
                break;
        }
        // 如果出现错误，用户依然可以点击按钮
        chatbotMessage().prohibit = false;
        if (chatbotMessage().messages.length > 0) {
        chatbotMessage().messages[chatbotMessage().messages.length - 1].progress = false;
        }
        throw errorData;
    }
    // 流式输出
    if (response.ok && resType == 'seream'){
        const reader = response.body?.getReader()
        while (reader) {
            const {done, value} = await reader.read()
            if (done) break 
            // 把字节流解码为utf-8的字符串
            const decoder = new TextDecoder("utf-8")
            // 解码二进制数据为字符串
            const decodedString = decoder.decode(value)
            if (decodedString !== "OK"){
                // 在字符串中查询并提取所有成对的{}之间的内容
                const matches = []
                let depth = 0 
                let start = 0
                for (let i = 0; i < decodedString.length; i++) {
                    if (decodedString[i] == "{"){
                        if (depth === 0){
                            start = i 
                        }
                        depth++
                    }else if (decodedString[i] == "}"){
                        depth--
                        if (depth === 0){
                            matches.push(decodedString.slice(start, i + 1))
                        }
                    }
                }
                // console.log(matches)
                for (let index = 0; index < matches.length; index++) {
                    var jsonString = matches[index]
                    const res = JSON.parse(jsonString)
                    console.log(res);
                    chatbotMessage().serverData(res)
                }
            }
            if (decodedString == "OK"){
                console.log("输出完毕")
            }
            console.log(decodedString);
            }
            
            



        }
}



// 统一返回的接口
interface ApiResponse<T>{
    data:T, //返给前端的数据
    msg:string, //提示
    error:any, //错误说明
    serviceCode:string, //业务错误码
    code:string //状态码
}
// 发送消息
export const chatMessageApi = (data:{chatMessage:conversationType}):Promise<ApiResponse<Buffer>>=>
    {
    return fetchApi(`${requestUrl}/chatMessage`, "POST", data)
    }
// 查询火车票
export const queryTrainTickets = (data:QueryTrainTicketsType):Promise<ApiResponse<ServerQueryTrainTicketsType>>=>{
    return fetchApi(`${requestUrl}/queryTrainTickets`, "POST", data, "1234");
}
// 查询天气
export const queryWeather = (data:QueryWeatherType):Promise<ApiResponse<ServerQueryWeatherType>>=>{
    return fetchApi(`${requestUrl}/queryWeather?city=${data.city}`, "GET", "", '1234', "1234");
}

// 搜索商品
export const searchGoods = (data: SearchGoodsType): Promise<ApiResponse<ServerSearchGoodsType>> => {
    return fetchApi(`${requestUrl}/searchGoods`, "POST", data, "1234");
}
// 查看商品详情
export const goodsDetails = (data: {goodsId:string}):Promise<ApiResponse<ServerGoodsDetails>>=>{
    return fetchApi(`${requestUrl}/goodsDetails`, "POST", data, "1234");
}
// 图片上传
export const uploadFile = (data: FormData):Promise<ApiResponse<string>>=>{
    return fetchApi(`${requestUrl}/uploadFile`, "POST", data, "1234", "1234");
}

// 提交投诉
export const addComplaint = (data: AddComplaintType): Promise<ApiResponse<null>> => {
    return fetchApi(`${requestUrl}/addComplaint`, "POST", data, "1234", "1234");
}