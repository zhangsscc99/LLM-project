<template>
    <div class="input-container">
        <div class="data-query">
            <van-button size="small" type="default">查询火车票</van-button>
            <van-button size="small" type="default">查询天气</van-button>
            <van-uploader>
                <van-button size="small" type="default">图片问答</van-button>
            </van-uploader>
            <van-uploader>
                <van-button size="small" type="default">一键投诉</van-button>
            </van-uploader>

        </div>
        <div class="input-box-area">
            <img src="@/assets/qingchu.png" alt="">
            <van-field class="input-content" type="textarea" placeholder="请输入询问内容" :border="false"></van-field>
            <van-button size="small" type="default">一键投诉</van-button>

        </div>

    </div>
    

</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.input-container{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .data-query{
        display: flex;
        align-items: center;
        .van-button{
            margin-left: 15px;
            margin-bottom: 15px;
        }

    }
    .input-box-area{
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        padding-top: 5px;
        img{
            width: 27px;
            height: 27px;
            margin: 0 10px;
            
        }
    }
}

</style>
