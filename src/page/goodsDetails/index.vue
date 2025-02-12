<template>
    <van-nav-bar title="商品详情" left-arrow fixed placeholder/>
    <img class="cover-image" src="https://cn.matsuyama-sightseeing.com/wp-content/themes/MatsuyamaSightseeing_theme_2019_cn/assets/img/home/kvsp_05.jpg" alt="">
    <div class="price-and-title">
        <p class="goods-price">199/人</p>
        <p class="goods-title">标题</p>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="less">
.cover-image{
    width: 100%;
    max-height: 300px;
    object-fit: cover;

}
.price-and-title{
    background-color: #ffffff;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    .goods-price{
        font-size: 22px;
        color: red;
        padding-bottom: 10px;
    }
    .goods-title{
        font-size: 19px;
    }
    
}
</style>