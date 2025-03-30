<template>
    <div class="content">
        <introParagraph></introParagraph>
        <defaultQuestion></defaultQuestion>
        <chatMessage></chatMessage>
        <inputArea></inputArea>
    </div>
    <div style="height: 300px"></div>
</template>


<script setup lang="ts">
import introParagraph from '@/page/component/introParagraph.vue'
import defaultQuestion from '@/page/component/defaultQuestion.vue'
import chatMessage from '@/page/component/chatMessage.vue'
// 底部输入框
import inputArea from '@/page/component/inputArea.vue'
import { watch, onMounted, ref, onUnmounted } from 'vue';
import { chatbotMessage } from '@/store/index';
const store = chatbotMessage();
import { throttle } from 'lodash';

// 监听滚动，对话输出自动滚动底部
watch(
    ()=>store.messages, 
    (val)=>{
        // 如果用户下拉页面，就不在自动滚动。
        if (store.userScrolled)return
        automatic();
    }, 
    {deep:true}
);
const automatic = ()=>{
    const contentElement = document.querySelector(".content")
    window.scrollTo({
        top: contentElement?.scrollHeight,
        behavior: "smooth",
    });
};
onMounted(()=>{
    // 监听滚动事件
    window.addEventListener("scroll", handleScroll);
});

// 监听滚动方向
const lastScrollTop = ref(0);
const handleScroll = ()=>{
    const currentScroll = window.scrollY;
    console.log(currentScroll);
    if (currentScroll > lastScrollTop.value) {
        console.log("上拉");
    } else {
        console.log("下拉");
        store.userScrolled = true;
    }
    lastScrollTop.value = currentScroll; 
};
// 节流
const throttleHandleScroll = throttle(handleScroll, 300)
// 页面卸载时触发
onUnmounted(()=>{
    window.removeEventListener("scroll", throttleHandleScroll);

})


</script>


<style scoped lang="less">
.content{
    padding: 0 15px;
}
</style>