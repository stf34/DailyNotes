<template>
    <div class="calendar">
        <!-- 日历选择切换 -->
        <van-tabs v-model="active">
            <van-tab title="年月">
                <years/>
            </van-tab>
            <van-tab title="年月日">
                <specificDate/>
            </van-tab>
            <van-tab title="年月日时">
                <YearMonthDayHour/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import years from './components/years'
import specificDate from './components/specificDate'
import YearMonthDayHour from './components/YearMonthDayHour'
export default {
    name:'calendar',
    data() {
        return {
            active:'1',
        };
    },
    components: {
        years,
        specificDate,
        YearMonthDayHour

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
.calendar{

}
</style>
