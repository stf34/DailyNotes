<template>
    <div class="layout">
        <!-- 二级级容器 -->
        <router-view/>
        <layouFoot/>
    </div>
</template>

<script>
import layouFoot from '../../../components/layouFoot'
export default {
    name:'layout',
    data() {
        return {

        };
    },
    components: {
       layouFoot,
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
