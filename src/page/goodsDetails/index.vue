<template>
    <van-nav-bar title="商品详情" left-arrow fixed placeholder/>
    <img class="cover-image" src="https://cn.matsuyama-sightseeing.com/wp-content/themes/MatsuyamaSightseeing_theme_2019_cn/assets/img/home/kvsp_05.jpg" alt="">
    <div class="price-and-title">
        <p class="goods-price">199/人</p>
        <p class="goods-title">标题</p>
    </div>
    <div class="goods-details">
        <p class="goods-describe">产品特色</p>
        <img src="https://www.aichi-now.jp/img/sp/top/mv_ph006.jpg" alt="">
        <img src="https://www.aichi-now.jp/img/sp/top/mv_ph006.jpg" alt="">
        <img src="https://www.aichi-now.jp/img/sp/top/mv_ph006.jpg" alt="">
    </div>
    <div class="submit">
        <van-button type="primary" block>立即报名</van-button>
    </div>
    <div style="height: 100px"></div>
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
.goods-details{
    background-color: #ffffff;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    .goods-describe{
        padding-bottom: 10px;
        font-weight: bold;
    }
    img{
        width: 100%;

    }
}
.submit{
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px 20px 20px;
}
</style>