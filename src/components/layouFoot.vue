<template>
    <div class="layouFoot">
        <van-row type="flex" justify="space-around">
            <van-col span="6">
                <van-icon name="bulb-o" />
                <span class="test">便利贴</span>
            </van-col>
            <van-col span="6">笔记本</van-col>
            <van-col span="6">打卡器</van-col>
            <van-col span="6">小账本</van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name:'layouFoot',
    data() {
        return {

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
.layouFoot{
    width: 100%;
    height: 82px;
    background-color: #fff;
    /deep/ .van-row--flex{
        .van-col{
            display: flex;
            justify-content: center;
            justify-items: center;
            flex-wrap: wrap;
            .van-icon{
                width: 100%;
                height: 42px;
                font-size: 42px;
                text-align: center;
            }
            .test{
                font-size: 32px;
            }
        }
    }
}
</style>
