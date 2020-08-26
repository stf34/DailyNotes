<template>
    <div class="layout">
        <!-- 主要内容对齐 -->
        <van-row type="flex" justify="space-between">
            <van-col :class="{layoutSidebar:SidebarType}" :span="SidebarType?0:6">
                <!-- 侧边菜单 -->
                <Sidebar></Sidebar> 
            </van-col>
            <van-col :span="SidebarType?24:18" class="layouContent">
                <!-- 二级容器 -->
                <router-view/>
            </van-col>
        </van-row>
        <!-- 控制侧边菜单的显示和隐藏 -->
        <van-icon class="apps-o" name="apps-o" @click="OnSidebar" />
    </div>
</template>

<script>
import Sidebar from '../../../components/Sidebar'
export default {
    name:'layout',
    data() {
        return {
            SidebarType:false//控制侧边菜单的展开与隐藏
        };
    },
    components: {
        Sidebar,

    },
    created() {

    },
    mounted() {

    },
    methods: {
        /* 操作侧边菜单的显示隐藏 */
        OnSidebar(){
            this.SidebarType = !this.SidebarType
        }
    }
};
</script>

<style scoped lang="less">
.layout{
    .layoutSidebar{
        display: none;
    }
    .van-icon-apps-o{
        position: fixed;
        bottom: 20px;
        left: 20px;
        font-size: 46px;
        color: turquoise;
    }
}
</style>
