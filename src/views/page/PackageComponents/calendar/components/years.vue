<template>
    <div class="years">
        <!-- 两端对齐 -->
        <van-row type="flex" justify="space-between" class="years_top">
            <van-col span="6">
                <p>
                    2020  微记忆文章： https://www.ifanr.com/app/1315909
                </p>
            </van-col>
            <van-col span="6">span: 6</van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name:'years',
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
.years{
    /* 头部区域 */
    .years_top{

    }
}
</style>
