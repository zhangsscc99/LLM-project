<template>
    <div class="content">
        <introParagraph></introParagraph>
        <defaultQuestion />
    </div>
</template>

<script setup lang="ts">
import introParagraph from '@/page/component/introParagraph.vue'
import defaultQuestion from '@/page/component/defaultQuestion.vue'
</script>


<style scoped lang="less">
.content{
    padding: 0 15px;
}
</style>