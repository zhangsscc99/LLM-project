<template>
    <van-nav-bar title="投诉" left-arrow fixed placeholder/>
    <div class="complaint-container">
        <p>你要投诉谁</p>
        <van-field
    is-link
    readonly 
    placeholder="选择投诉对象" @click="showPicker = true" />

<van-popup :show="showPicker" round position="bottom">
    <van-picker
    :columns="objectData" @cancel="showPicker = false" />
    
</van-popup>

    </div>
    

</template>

<script setup lang="ts">
import { ref } from 'vue';
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
</script>
<style scoped lang="less">
</style>