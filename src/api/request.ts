import { chatMessageType } from "@/types/index"
const requestUrl = "http://127.0.0.1:7000"


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
    await fetch(requestUrl)
}

// 统一返回的接口
interface ApiResponse<T>{
    data:T, //返给前端的数据
    msg:string, //提示
    error:any, //错误说明
    serviceCode, //业务错误码
    code //状态码
}
// 发送消息
export const chatMessageApi = (data:{chatMessage:chatMessageType}):Promise<ApiResponse<Buffer>>



