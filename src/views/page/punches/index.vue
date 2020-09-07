<template>
    <div class="punches">
        打卡器
        <valSoll :ListData='ListData' />
    </div>
</template>

<script>
import valSoll from '../../../components/draggable/index'
export default {
    name:'punches',
    data() {
        return {
            ListData: ['你好', 'Heller', 3, 4, 5, 6, 7, 8]
        };
    },
    components:{
        valSoll,
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
.punches{
    
}
</style>
