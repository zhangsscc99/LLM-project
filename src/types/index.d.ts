export type TextContent = {type:'text', text:string}
export type ImageContent = {type:'image_url', image_url:{url:string}}


// 搜索商品返回的结果
export type ServerSearchGoodsType = {
    _id:string;
    coverImage:string;
    contentTitle:string;
    price:number
}[]



// 发送消息
export type chatMessageType = {
    role:"user" | "assistant" // 角色
    content:string | Array<TextContent | ImageContent>//发送的内容
    toolData?:any;//存储返回的函数调用工具数据
    type?:"function";//是单纯对话还是含有工具调用的数据
    functionName?:string;
    progress?:boolean;//返回进度, false已返回, true数据请求中
    searchGoodsData?:ServerSearchGoodsType[];//搜索商品返回的结果



};
export type conversationType = chatMessageType[];

// 发送消息的字段
export type sendMessageType = string | Array<TextContent | ImageContent>;

// 大模型返回的消息
export type serverDataType = {
    type:string
    functionName:string 
    data:any
};



// 查询火车票传递的参数
export type QueryTrainTicketsType = {
    departure:string, destination:string, date:string

}

// 查询火车票返回的参数
export type ServerQueryTrainTicketsType = {
    trainno:string
    station:string
    endstation:string
    departuretime:string
    arrivaltime:string
    costtime:string
    priceed:string

}[];