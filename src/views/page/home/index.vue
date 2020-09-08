<template>
    <div class="home">
        <!-- 头部Taber标签 -->
        <homeTaber :taberData="taberData" :icon="icon" :ListData='ListData' :StepsData='StepsData'/>
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
            ],
            ListData: ['你好', 2, 3, 4, 5, 6, 7, 8],
            StepsData:[
                {
                    specificDate:'2020/8/13',
                    time:'9:30'
                },
                {
                    specificDate:'2020/8/23',
                    time:'7:30'
                },
                {
                    specificDate:'2020/9/03',
                    time:'3:30'
                },
                {
                    specificDate:'2020/9/13',
                    time:'4:30'
                },
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
    height: 100%;
    background-color: #060629; 
}
</style>
