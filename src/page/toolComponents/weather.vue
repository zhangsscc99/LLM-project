<template>
    <div style="height: 4px"></div>
    <div class="weather-content">
        <div class="weather-item">
            <div class="day-time">11/09</div>
            <div class="day-weather">
                <img src="@/assets/kefu.png" alt="">
                <p>晴</p>

            </div>
            <div class="temperature">12-18℃</div>
        </div>
        <div class="weather-item">
            <div class="day-time">11/09</div>
            <div class="day-weather">
                <img src="@/assets/kefu.png" alt="">
                <p>多云</p>

            </div>
            <div class="temperature">12-18℃</div>
        </div>

    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
    .weather-content{
        background: linear-gradient(to bottom left, #2c305b, #6b6f91);
        color: #ffffff;
        border-radius: 4px;
        .weather-item{
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 15px;
            padding: 7px 0;
            .day-time{
                flex: 1;
                text-align: center;


            }
            .day-weather{
                display: flex;
                align-items: center;
                p{
                    font-size: 15px;
                    padding-left: 10px
                }
                img{
                    width: 30px;
                    height: 30px;
                    
                }
            }
            .temperature{
                flex: 1;
                text-align: center;

            }
        }
    }

</style>
