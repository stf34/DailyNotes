<template>
    <div class="EditNotes">
        <!-- 头部样式 -->
        <van-row class="EditNotes_top" type="flex" justify="space-between">
            <van-col span="2">
                <span class="arrow iconfont">&#xe766;</span>
            </van-col>
            <van-col span="14">
                table切换区
            </van-col>
            <van-col span="2">
                
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name:'EditNotes',
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
.EditNotes{
    width: 100%;
    height: 100vh;
    /* 头部样式 */
    .EditNotes_top{
        width: 100%;
        height: 60px;
        justify-items: center;
        border-bottom: 1px solid #ccc;
        .van-col{
            display: flex;
            justify-content: center;
            justify-items: center;
            /* 左箭头 */
            .arrow{
                font-size: 20px;
                line-height: 60px;
                color: red;
            }
        }
    }
}
</style>
