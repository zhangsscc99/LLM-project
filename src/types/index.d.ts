export type TextContent = {type:'text', text:string}
export type ImageContent = {type:'image_url', image_url:{url:string}}

// 发送消息
export type chatMessageType = {
    role:"user" | "assistant" // 角色
    content:string | Array<TextContent | ImageContent>//发送的内容
    toolData?:any;//存储返回的函数调用工具数据
    type?:"function";//是单纯对话还是含有工具调用的数据
    functionName?:string;

}