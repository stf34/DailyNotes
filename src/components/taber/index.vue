<template>
    <div class="taber">
        <van-row type="flex" justify="space-around">
            <van-col span="21"></van-col>
            <van-col span="3">
                <div>
                    <van-icon :name="icon" />
                </div>
            </van-col>
        </van-row>
        <!-- 标签内容 -->
        <van-tabs
            @click="onClick"
            animated
            swipeable
            sticky>
            <van-tab v-for="(item,index) in taberData" :key="index">
                <template #title>
                  <span class="Text">{{item.name}}</span> 
                </template>
                内容 {{ index }}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    props:["taberData","icon"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        /* 标签点击事件 */
        onClick(index, title) {
            this.$toast(index, title);
        },
    }
};
</script>

<style scoped lang="less">
.taber{
    /deep/ .van-tabs{
        .van-tabs__wrap{
            height: 60px;
            /* 标题样式 */
            .tablist{
                .van-tab{
                    .van-tab__text--ellipsis{
                        color: red;
                    }
                }
            }
        }
    }
}

</style>
