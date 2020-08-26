<template>
    <div class="sidernav">
        <!-- 通过accordion可以设置为手风琴模式，最多展开一个面板，此时activeName为字符串格式 -->
        <van-collapse v-model="activeNames" accordion>
            <van-collapse-item name="1">
                <template #title>
                    <div>
                        <van-icon name="qr" /> 首页 
                    </div>
                </template>
                <!-- 主要内容 -->
                <van-sidebar v-model="activeKey" @change="onChange">
                    <van-sidebar-item title="标签名1" to="/" />
                    <van-sidebar-item title="标签名2" to="/moth" />
                    <van-sidebar-item title="标签名3" />
                </van-sidebar>
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
            activeKey: 0,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        /* 设置change方法来监听切换导航项时的事件 */
        onChange(index) {
            console.log(index);
        },
    }
};
</script>

<style scoped lang="less">

</style>
