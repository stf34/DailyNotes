<template>
    <div class="Steps">
        <van-steps direction="vertical" :active="this.$store.state.StepsNumber">
            <van-step v-for="(val,index) in StepsData" :key="index">
                <h3>{{val.specificDate}}</h3>
                <p v-if="parseInt(val.time)>=6 && parseInt(val.time)<8">早上{{val.time}}</p>
                <p v-else-if="parseInt(val.time)>=8 && parseInt(val.time)<11">上午{{val.time}}</p>
                <p v-else-if="parseInt(val.time)>=11 && parseInt(val.time)<13">中午{{val.time}}</p>
                <p v-else-if="parseInt(val.time)>=13 && parseInt(val.time)<18">下午{{val.time}}</p>
                <p v-else>晚上{{val.time}}</p>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
export default {
    name:'Steps',
    props:['StepsData'],
    data() {
        return {

        };
    },
    created() {

    },
    watch: {
        // /* 监听传的值 */
        // active(newval, oldval) {
        //     console.log(1213);
        //     /* 将变化的新值，赋予到要渲染的值 */
        //     console.log('监听传的值',newval, oldval);
        //     this.active = this.$store.state.StepsNumber;
        // }
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
        background-color: rgba(0, 0, 0, 0);
        .van-steps__items{
            height: 100%;
            .van-step{
                height: 10%;
                /* 点击后的样式 */
                .van-step__title--active{
                    color: #EA8346 !important;
                }
                /* 点击前的 */
                .van-step__title{
                    color: #fff;
                    h3{
                        font-size: 16px;
                    }
                    p{
                        font-size: 16px;
                    }
                }
            }
            /* 前置线条 */
            .van-step--vertical:first-child::before {
                position: absolute;
                top: 0;
                left: -12rem;
                z-index: 1;
                width: 1px;
                height: 2.66667rem;
                background-color: #fff;
                content: '';
            }
            /* 去除下划线 */
            .van-step--vertical:not(:last-child)::after {
                border-bottom-width: 1px;
                border: none;
            }
            /* 步骤图标线的调整 */
            .van-step--vertical{
                /* 步骤线的位置 */
                .van-step__line {
                    top: 3.13333rem;
                    left: 18rem;
                    width: 1px;
                    height: 90%;
                    background-color: #fff;
                }
                /* 步骤图标的位置 */
                .van-step__circle-container{
                    position: absolute;
                    top: 2.53333rem;
                    left: 18rem;
                    z-index: 2;
                    font-size: 1.6rem;
                    line-height: 1;
                    -webkit-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    .van-step__icon--active{
                        color: #EA8346;
                    }
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
