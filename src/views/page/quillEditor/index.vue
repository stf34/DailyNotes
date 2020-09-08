<template>
    <div class="SomeNotes">
        <div class="TextContent" v-html="content">

        </div>
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption">

        </quill-editor>
        <van-button type="primary" @click="submit">提交</van-button>
        原HTML：
        <div>{{value}}</div>
    </div>
</template>

<script>
export default {
    name:'SomeNotes',
    data() {
        return {
            content: "", //编辑器内容
            editorOption: {},
            value: ""
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        submit() {
            this.value = this.content;
        }
    }
};
</script>

<style scoped lang="less">
.SomeNotes{
    // 修改编辑器默认高度
  .quill-editor .ql-editor {
    min-height: 600px;
  }
  /* 编辑内容区域 */
  .TextContent{
    width: 100%;
    height: auto;
    min-width: 600px;
    /* 图片大小 */
    img{
        width: 100%;
        height: auto;
    }
  }
}
</style>
