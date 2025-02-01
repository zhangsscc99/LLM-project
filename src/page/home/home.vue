<template>
    <div class="content">
        <introParagraph></introParagraph>
        <defaultQuestion />
        <chatMessage/>
    </div>
</template>


<script setup lang="ts">
import introParagraph from '@/page/component/introParagraph.vue'
import defaultQuestion from '@/page/component/defaultQuestion.vue'
import chatMessage from '@/page/component/chatMessage.vue'
</script>


<style scoped lang="less">
.content{
    padding: 0 15px;
}
</style>