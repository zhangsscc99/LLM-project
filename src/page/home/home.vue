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
import { watch, onMounted } from 'vue';
import { chatbotMessage } from '@/store/index';
const store = chatbotMessage();
// 监听滚动，对话输出自动滚动底部
watch(
    ()=>store.messages, 
    (val)=>{
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
    window.addEventListener("scroll", )
});
// 监听滚动方向
const handleScroll = ()=>{
    const currentwindow.scrollY > 100 ? 
}


</script>


<style scoped lang="less">
.content{
    padding: 0 15px;
}
</style>