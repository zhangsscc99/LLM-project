<template>
    <div class="support-agent">
        <img src="@/assets/kefu.png" alt="">
        <p>旅游助手</p>
    </div>
    <div class="customer-service">
        <span class="tips">你可以这样问我</span>
        <div class="customer-service-list" v-for="(item, index) in customerServiceList" :key="index"
        @click="selectSend(item)"
        >
            <img src="@/assets/wenti.png" alt="" />
            <p>{{ item }}</p>
        </div>
        
    </div>
    <div class="change-section" @click="switchMode">
        <img src="@/assets/huanyihuan.png" alt="">
        <p>换一换</p>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { chatbotMessage } from "@/store/index";
const store = chatbotMessage();
// 默认问题
const customerServiceList = ref([
    "哀牢山可以进入探险旅游吗",
    "大理古城有哪些夜市",
    "大理古城的门票是多少",
    "大理古城的开放时间是什么时候",
    "大理古城的地址在哪里",
    "大理古城的联系电话是多少",
    "大理古城的交通方式有哪些",
    "大理古城的住宿有哪些",
]);
const currentIndex = ref(0);
const displayedList = computed<string[]>(()=>{
    return JSON.parse(JSON.stringify(customerServiceList.value)).slice(currentIndex.value, 5);
});
// 换一换
let grop = 0
const switchMode = ()=>{
    grop + 5
    if (grop >= customerServiceList.value.length){
        currentIndex.value = 0;
        grop = 0;
        return
    }
    currentIndex.value += 5;

};
const selectSend = (val:string)=>{
    store.sendMessage(val);
}

</script>

<style scoped lang="less">
.support-agent{
    display: flex;
    align-items: center;
    img{
        object-fit: cover;
        width: 35px;
        height: 35px;
        margin-right: 8px;
    }

    p{
        font-size: 14px;
        
    }
}
.customer-service{
    background-color:#ffffff; 
    margin: 10px 0;
    padding: 10px; 
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    .tips {
        font-size: 16px;

    }
    .customer-service-list{
        display: flex;
        align-items: center;
        background-color: #f2f4ff;
        border-radius: 40px;
        margin-top: 10px;
        padding: 5px 7px; 
        img{
            width: 25px;
            height: 25px;
            object-fit: cover;
        }
        p{
            font-size: 14px;
            padding-left: 4px;
        }
    }
}
.change-section{
    display: inline-flex;
    align-items: center; 
    background-color: #a8abb0;
    border-radius: 40px; 
    padding: 4px 7px;
    img{
        width: 20px; 
        height: 20px;

    }
    p{
        font-size: 14px; 
        padding-left: 7px;
        color: #ffffff;

    }
}
</style>

