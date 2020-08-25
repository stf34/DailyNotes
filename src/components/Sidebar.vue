<template>
    <div class="sidernav">
        <!-- 通过accordion可以设置为手风琴模式，最多展开一个面板，此时activeName为字符串格式 -->
        <van-collapse v-model="activeNames" accordion>
            <van-collapse-item name="1">
                <template #title>
                <div><van-icon name="qr" /> 首尔 </div>
                </template>
                内容
            </van-collapse-item>
            <van-collapse-item title="首页二" name="2" icon="shop-o">
                内容
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
    name:'sidernav',
    data() {
        return {
            activeNames: '1',//此时activeName为字符串格式
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

</style>
