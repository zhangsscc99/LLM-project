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
        <van-field type="textarea" class="input-content" placeholder="输入投诉原因"></van-field>
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
</style>