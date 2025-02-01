<template>
    <div class="content">
        123
    </div>
    <div>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="success">成功按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <p class="hello">你好</p>
    </div>

</template>

<script setup lang="ts">
import introParagraph from '@/page/component/introParagraph.vue'
</script>


<style scoped lang="less">
.content{
    padding: 0 15px;
}
</style>