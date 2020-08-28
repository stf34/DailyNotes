<template>
    <div class="PageMonitoring">
        <p v-for="(val,index) in 100" :key="index">{{val}}</p>
    </div>
</template>

<script>
export default {
    name:'PageMonitoring',
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {
        // 监听页面滑动
        window.addEventListener('scroll', this.Scroll, true)
    },
    destroyed () {
        /* 离开清除监听事件 */
        window.removeEventListener('scroll', this.Scroll)
    },
    methods: {
        /* 滚动监听定位 */
        Scroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            /* 下面的类目是你要监听的元素类名 */
            // var offsetTop = document.querySelector('类名').offsetTop
            if (scrollTop > 400) {
                // 这里可以写你要改变的事件或者是状态
                // console.log('大于400');
            } else {
                // 这里可以写你要改变的事件或者是状态
                // console.log('小于400');
            }
        },
    }
};
</script>

<style scoped lang="less">

</style>
