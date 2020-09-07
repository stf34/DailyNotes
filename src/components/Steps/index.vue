<template>
    <div class="Steps">
        <van-steps direction="vertical" :active="active">
            <van-step>
                <h3>2016-07-12</h3>
                <p> 12:40</p>
            </van-step>
            <van-step>
                <h3>2016-07-11</h3>
                <p> 10:00</p>
            </van-step>
            <van-step>
                <h3>2016-07-10</h3>
                <p> 09:30</p>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
export default {
    name:'Steps',
    data() {
        return {
            active: 0,//当前步骤
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">
.Steps{
    width: 100%;
    height: 100vh;
    /deep/ .van-steps{
        height: 100%;
        .van-steps__items{
            height: 100%;
            .van-step{
                height: 10%;
                .van-step__title{
                    h3{
                        font-size: 16px;
                    }
                    p{
                        font-size: 16px;
                    }
                }
            }
            /* 步骤图标线的调整 */
            .van-step--vertical{
                /* 步骤线的位置 */
                .van-step__line {
                    top: 3.13333rem;
                    left: 24rem;
                    width: 1px;
                    height: 90%;
                }
                /* 步骤图标的位置 */
                .van-step__circle-container{
                    position: absolute;
                    top: 2.53333rem;
                    left: 24rem;
                    z-index: 2;
                    font-size: 1.6rem;
                    line-height: 1;
                    -webkit-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    .van-step__circle{
                        display: block;
                        width: 14px;
                        height: 15px;
                        background-color: #969799;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
}
</style>
