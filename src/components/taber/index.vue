<template>
    <div class="taber">
        <van-row type="flex" justify="space-around">
            <van-col span="21"></van-col>
            <van-col span="3">
                <div class="Icon">
                    <van-icon :name="icon" />
                </div>
            </van-col>
        </van-row>
        <!-- 标签内容 -->
        <van-tabs
            @click="onClick"
            animated
            swipeable
            sticky>
            <van-tab v-for="(item,index) in taberData" :key="index">
                <template #title>
                <span class="Text">{{item.name}}</span> 
                </template>
                <van-row type="flex" justify="space-between">
                    <van-col span="8">
                        <valSteps :StepsData='StepsData' />
                    </van-col>
                    <van-col span="15">
                        <valSoll :ListData='ListData' />
                    </van-col>
                </van-row>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import valSoll from '../draggable/index'
import valSteps from '../Steps/index'
export default {
    /* 
    "taberData",//tab栏的内容
    "icon",//图标
    'ListData',//tab栏下面的内容
    'StepsData'//左侧步骤条内的内容
    */
    props:["taberData","icon",'ListData','StepsData'],
    name:'taber',
    data() {
        return {
            
        };
    },
    components:{
        valSoll,
        valSteps
    },
    created() {

    },
    mounted() {

    },
    methods: {
        /* 标签点击事件 */
        onClick(index, title) {
            this.$toast(index, title);
        },
    }
};
</script>

<style scoped lang="less">
.taber{
    .Icon{
        width: 40px;
        height: 40px;
        background-color: #ECA67E;
        line-height: 56px;
        text-align: center;
        border-radius: 50px;
        margin-top: 20px;
        .van-icon-apps-o{
            color: #fff;
            font-size: 26px;
        }
    }
    /* tab栏样式 */
    /deep/ .van-tabs{
        /* 控制高度 */
        .van-tabs__wrap{
            // height: 80px;
            /* 背景色 */
            .van-tabs__nav{
                // background-color: rgba(0, 0, 0, 0);
                background-color: #060629; 
                /* 点击后的样式 */
                .van-tab--active{
                    color: #ECA67E !important;
                    font-weight: 600;
                    font-size: 22px;
                }
                /* 点击前的样式 */
                .van-tab{
                    color: #fff;
                    letter-spacing: 2px;
                    .van-tab__text--ellipsis{
                        overflow: visible;
                    }
                }
                .van-tabs__line{
                    width: 26px !important;
                    background-color:#ECA67E;
                }
            }
        }
        /* 内容区域 */
        .van-tabs__content{
            .van-row{
                box-sizing: border-box;
                padding: 10px;
            }
        }
    }
}

</style>
