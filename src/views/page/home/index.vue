<template>
    <div class="home">
        <!-- 头部Taber标签 -->
        <homeTaber :taberData="taberData" :icon="icon"/>
    </div>
</template>

<script>
import homeTaber from '../../../components/taber/index'
export default {
    name:'home',
    data() {
        return {
            /* tab内容 */
            icon:'apps-o',
            taberData:[
                {
                    name:'待办'
                },
                {
                    name:'星标'
                },
                {
                    name:'已办'
                }
            ]
        };
    },
    components:{
        homeTaber,
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
.home{
    width: 100%;
    height: 100vh;
   background-color: #060629; 
}
</style>
