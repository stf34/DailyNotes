<template>
    <div class="layouFoot">
        <van-tabbar v-model="active" @change="onChange">
            <van-tabbar-item
                :class="{vanRadius:active < index&&(active == index-1),vanRadiusl:active > index&&(active == index+1)}"
                v-for="(val,index) in data" :key="index"
                :icon="active == index?val.icon:val.icon1"
                >
                {{val.name}}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'layouFoot',
    data() {
        return {
            active: 0,
            data:[
                {
                    icon:'description',
                    icon1:'records',
                    name:'便利贴'
                },
                {
                    icon:'records',
                    icon1:'records',
                    name:'点滴记'
                },
                {
                    icon:'bulb-o',
                    icon1:'bulb-o',
                    name:'打卡器'
                },
                {
                    icon:'balance-list-o',
                    icon1:'balance-list-o',
                    name:'小账本'
                }
            ]
        };
    },
    created() {
    },
    catch(){
        this.$router.push('/location').catch(err => { console.log(err) })
    },
    mounted() {
        this.onChange()
    },
    methods: {
        onChange() {
            /* 主页面 */
            if (this.active === 0) {
                this.$router.push({
                    path: '/home',
                    replace: true
                })
            }
            //点滴记
            else if (this.active === 1) {
                this.$router.push({
                    path: '/SomeNotes',
                    replace: true
                })
            }
            //打卡器
            else if (this.active === 2) {
                this.$router.push({
                    path: '/punches',
                    replace: true
                })
            }
            //小账本
            else if (this.active === 3) {
                this.$router.push({
                    path: '/AccountBook',
                    replace: true
                })
            }
        }
    }
};
</script>

<style scoped lang="less">
.layouFoot{

    /deep/ .van-tabbar{
        box-sizing: border-box;
        // padding: 20px;
        height: 100px;
        background-color: #0F0E2D;
        /* 点击之后的效果 */
        .van-tabbar-item--active{
            background-color: #0F0E2D !important;
            /* 图标样式 */
            .van-tabbar-item__icon{
                background-color: #EA9F7D !important;
                .van-icon{
                    color: #1E1E29 !important;
                    font-weight: 400;
                }
            }
            /* 字体样式 */
            .van-tabbar-item__text{
                color: #BD8871 !important;
            }
        }
        .vanRadius{
            border-radius: 50px 0 0 0;
        }
        .vanRadiusl{
            border-radius: 0 50px 0 0;
        }
        /* 单独标签的样式 */
        .van-tabbar-item{
            background-color: #EA9F7D;
            /* 图标 */
            .van-tabbar-item__icon{
                background-color: #0F0E2D;
                width: 42px;
                height: 42px;
                border-radius: 50%;
                text-align: center;
                position: relative;
                margin-bottom: 0.53333rem;
                font-size: 2.93333rem;
                margin-bottom: 10px;
                .van-icon{
                    margin-top: 12px;
                    color: #fff;
                }
            }
            /* 字体样式 */
            .van-tabbar-item__text{
                font-size: 16px;
                font-weight: 600;
                color: #150E2E;
            }
        }
    }
}
</style>
