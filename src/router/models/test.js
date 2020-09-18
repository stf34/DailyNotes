export default [
    {
        path: '/quillEditor',
        // icon: 'el-icon-lx-home',
        component: () => import('@/views/page/quillEditor/index.vue'),
        meta: { title: '编辑笔记', name: ['编辑笔记'] }
    },
    {
        path: '/EditNotes',
        // icon: 'el-icon-lx-home',
        component: () => import('@/views/page/EditNotes/index.vue'),
        meta: { title: '编辑笔记', name: ['编辑笔记'] }
    },
]