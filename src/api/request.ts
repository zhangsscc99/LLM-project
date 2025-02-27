import { chatMessageType } from "@/types/index"

// fetch请求

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



