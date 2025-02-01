<template>
    <div class="support-agent">
        <img src="@/assets/kefu.png" alt="">
        <p>旅游助手</p>
    </div>
    <div class="customer-service">
        <span class="tips">你可以这样问我</span>
        <div class="customer-service-list">
            <img src="@/assets/wenti.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

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
}
</style>

