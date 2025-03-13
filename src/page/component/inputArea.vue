<template>
    <div class="input-container">
        <van-uploader v-model="fileList" :max-count="1" preview-size="60" disabled v-if="!showImage"
        :before-delete="beforeDelete"
        />
        <div class="data-query" v-if="showImage">
            <van-button size="small" type="default">查询火车票</van-button>
            <van-button size="small" type="default">查询天气</van-button>
            <van-uploader :before-read="beforeRead" :after_read="afterRead">
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
// import { chatMessageApi } from "@/api/request";
import { chatbotMessage} from "@/store/index";
import { showToast, showLoadingToast } from "vant";
import type { UploaderBeforeRead, UploaderAfterRead } from "vant";
const store = chatbotMessage()
import { uploadFile } from "@/api/request"


// 存储上传的图片
const fileList = ref([{url: ''}]);
// 是否已上传图片
const showImage = ref(true)
// 上传之前校验
const beforeRead:UploaderBeforeRead = (file:any) => {
    console.log(file);
    const imageType = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
    if (!imageType.includes(file.type)) {
        showToast("请上传正确的图片");
        return false;
    }
    return true;
};
// 上传成功
const afterRead:UploaderAfterRead = async(file:any)=>{
    const toast = showLoadingToast({
        message:"上传中...",
        forbidClick:true,
        duration:0
    })
    console.log(file.file);
    const formData = new FormData();
    formData.append("file", file.file);
    const res = await uploadFile(formData);
    console.log(res);
    fileList.value[0].url = res.data;
    showImage.value = false;
    toast.close();
};
// 删除图片
const beforeDelete = (file:any)=>{
    fileList.value[0].url = '';
    showImage.value = true;
};
// 输入框内容
const inputContent = ref('');
const sendMessage = () => {
    store.sendMessage(
        showImage.value ? inputContent.value : [
            {
                type:"text",text:inputContent.value

            },
            {
                type:"image_url",image_url:{url:fileList.value[0].url}
            }
        ]
    )
    

  
};

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
