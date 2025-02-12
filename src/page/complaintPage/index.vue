<template>
    <van-nav-bar title="投诉" left-arrow fixed placeholder/>
    <div class="complaint-page">
        <p class="title-text">你要投诉谁</p>
        <van-field
    is-link
    readonly 
    placeholder="选择投诉对象" @click="showPicker = true" />

<van-popup :show="showPicker" round position="bottom">
    <van-picker
    :columns="objectData" @cancel="showPicker = false" />
    
</van-popup>

    </div>
    <div class="complaint-page">
        <p class="title-text">请告诉我们发生了什么事</p>
        <van-field type="textarea" class="input-content" placeholder="输入投诉原因" />
    </div>
    <div class="complaint-page">
        <p class="title-text">这件事发生在哪里</p>
        <van-field
    is-link
    readonly 
    placeholder="选择地区" @click="showPickerCity = true" />
        <van-popup :show="showPickerCity" round position="bottom">
        <van-picker
        :columns="cityData" @cancel="showPickerCity = false" />
        
    </van-popup>
    </div>
    <div class="complaint-page">
        <p class="title-text">你的诉求是</p>
        <van-field type="textarea" class="input-content" placeholder="点击输入处理诉求" />
    </div>
    <div class="complaint-page">
        <p class="title-text">最后， 我们需要了解您的个人信息， 用于核实事件以及告诉您处理结果</p>
        <van-field label="你的姓名" placeholder="请输入姓名" />
        <van-field label="你的联系方式" type="tel" placeholder="请输入电话号码" />
        <van-field
    is-link
    readonly 
    placeholder="你在云南是如何旅行的" @click="showPickerTravel = true" />

        <van-popup :show="showPickerTravel" round position="bottom">
            <van-picker
            :columns="travelMethodData" @cancel="showPickerTravel = false" />
        </van-popup>
    </div>
    <van-button class="submit-button" type="primary">提交投诉单</van-button>
    <div style="height: 150px"></div>
    



    
    

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cityData } from '@/config/city';
// 投诉对象数据
const objectData = ref([
    {
        text: "投诉旅行社", value: '001'
    },
    {
        text: "投诉导游", value: '002'
    },
    {
        text: "投诉商家", value: '003'
    },
    {
        text: "投诉景区", value: '004'
    },

])
const showPicker = ref(false)
const showPickerCity = ref(false)
const showPickerTravel = ref(false)
const travelMethodData = ref([
    {
        text: "自由行", value: '001'
    },
    {
        text: "跟团游", value: '002'
    },
])
</script>
<style scoped lang="less">
.complaint-page{
    padding: 10px;
    .title-text{
        padding-bottom: 10px;
        font-weight: bold;
    }
    .input-content{
        background-color: #f8f9fd;
        border-radius: 10px;
        padding: 6px;
    }
}
.submit-button{
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 10px;
}
</style>