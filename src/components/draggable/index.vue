<template>
    <div>
        <div class="drag">
            <draggable
                :move="getdata"
                @update="datadragEnd"
                class="dragUl"
                v-model="list">
                <div :key="index" v-for="(item, index) in list">{{ item }}</div>
            </draggable>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    props:['ListData'],
    data() {
        return {
            list: this.ListData
        };
    },
    components: {
        draggable
    },
    created() {

    },
    watch: {
        /* 监听传的值 */
        // ListData(newval, oldval) {
        //     /* 将变化的新值，赋予到要渲染的值 */
        //     console.log('监听传的值',newval, oldval);
        //     // this.details = newval.replace(/\n/g, "<br/>");
        //     // this.detailsData = newval.replace(/\n/g, "<br/>");
        //     console.log(12313);
        // }
    },
    mounted() {

    },
    methods: {
        getdata(evt) {
            console.log(evt);
            //这里evt后续的内容根据具体的定义变量而定 https://www.jianshu.com/p/03f0f58f84cc
        },
        datadragEnd(evt) {
            console.log("拖动前的索引 :" + evt.oldIndex);
            console.log("拖动后的索引 :" + evt.newIndex);
        }
    }
};
</script>

<style scoped lang="less">
.dragUl {
    overflow: hidden;
}

.dragUl div {
    height: 30px;
    line-height: 30px;
    background: #ff8300;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
}
</style>
