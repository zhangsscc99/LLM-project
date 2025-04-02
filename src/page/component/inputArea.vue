<template>
    <div class="input-container">
      <!-- 图片上传展示 -->
      <van-uploader class="upload-image" v-model="fileList" :max-count="1" preview-size="60" disabled v-if="!showImage" :before-delete="beforeDelete" />
      <div class="data-query" v-if="showImage">
        <van-button size="small" type="default" :disabled="store.prohibit" @click="inquire('帮我查询火车票')">查询火车票</van-button>
        <van-button size="small" type="default" :disabled="store.prohibit" @click="inquire('帮我查询天气')">查询天气</van-button>
        <van-uploader :before-read="beforeRead" :after-read="afterRead" :disabled="store.prohibit" name="file">
          <van-button size="small" type="default">图片问答</van-button>
        </van-uploader>
        <van-button size="small" type="default" :disabled="store.prohibit" @click="sendComplaint">一键投诉</van-button>
      </div>
      <div class="input-box-area">
        <img src="@/assets/qingchu.png" alt="" @click="remove" />
        <van-field class="input-content" v-model="inputContent" type="textarea" placeholder="请输入询问内容" :border="false"></van-field>
        <van-button class="send-button" size="small" type="default" @click="sendMessage" :disabled="store.prohibit">发送</van-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { chatbotMessage } from "@/store/index";
  const store = chatbotMessage();
  import { showToast, showLoadingToast } from "vant";
  import type { UploaderBeforeRead, UploaderAfterRead } from "vant";
  import { uploadFile } from "@/api/request";
  // 存储上传的图片
  const fileList = ref([{ url: "" }]);
  // 是否已上传图片
  const showImage = ref(true);
  // 上传之前校验
  const beforeRead: UploaderBeforeRead = (file: any) => {
    const imageType = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!imageType.includes(file.type)) {
      showToast("请上传正确的图片");
      return false;
    }
    return true;
  };
  // 上传成功
  const afterRead: UploaderAfterRead = async (file: any) => {
    const toast = showLoadingToast({
      message: "上传中...",
      forbidClick: true,
      duration: 0,
    });
    const formData = new FormData();
    formData.append("file", file.file);
    const res = await uploadFile(formData);
    // 客户端
    // fileList.value[0].url = "http://" + res.data;
    // 服务器端
    fileList.value[0].url = res.data;
    showImage.value = false;
    toast.close();
  };
  // 删除图片
  const beforeDelete = () => {
    fileList.value[0].url = "";
    showImage.value = true;
  };
  // 输入内容
  const inputContent = ref("");
  const sendMessage = () => {
    if (inputContent.value.trim() === "") return;
    store.sendMessage(
      showImage.value
        ? inputContent.value
        : [
            {
              type: "text",
              text: inputContent.value,
            },
            {
              type: "image_url",
              image_url: { url: fileList.value[0].url },
            },
          ]
    );
    beforeDelete();
    inputContent.value = "";
  };
  const inquire = (val: string) => {
    inputContent.value = val;
    sendMessage();
  };
  // 清空
  const remove = () => {
    if (store.prohibit) return;
    store.messages = [];
  };
  // 投诉
  import { useRouter } from "vue-router";
  const $router = useRouter();
  const sendComplaint = () => {
    $router.push({ path: "/complaintPage" });
  };
  </script>
  
  <style scoped lang="less">
  .input-container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .upload-image {
      margin-left: 15px;
    }
    /deep/.van-uploader__wrapper--disabled {
      opacity: inherit;
      .van-uploader__preview {
        background-color: #ffffff;
      }
    }
    .data-query {
      display: flex;
      align-items: center;
      .van-button {
        margin-left: 15px;
        margin-bottom: 5px;
        opacity: 1;
      }
    }
    .input-box-area {
      background-color: #ffffff;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      padding-top: 5px;
      img {
        width: 27px;
        height: 27px;
        margin: 0 10px;
      }
      .input-content {
        background-color: #f8f9fd;
        flex: 1;
        border-radius: 10px;
        padding: 6px;
      }
      .send-button {
        border: none;
        font-size: 15px;
        color: #3a71e8;
        font-weight: bold;
        margin: 0 5px;
      }
    }
  }
  </style>
  