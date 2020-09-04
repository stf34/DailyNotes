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
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8]
        };
    },
    components: {
        draggable
    },
    created() {

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
