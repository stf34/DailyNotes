export default [
    {
        path: '/',
        component: () => import('@/views/coverpage/index.vue')
    },
    {
        path: '/layout',
        component: () => import('@/views/page/layout/index.vue'),
        meta: { name:'首页', title: '描述文件' },
        children: [
          {
            path: '/home',
            // icon: 'el-icon-lx-home',
            component: () => import('@/views/page/home/index.vue'),
            meta: { title: '首页', name: ['首页'] }
          },
          {
            path: '/SomeNotes',
            // icon: 'el-icon-lx-home',
            component: () => import('@/views/page/SomeNotes/index.vue'),
            meta: { title: '点滴记', name: ['点滴记'] }
          },
          {
            path: '/punches',
            // icon: 'el-icon-lx-home',
            component: () => import('@/views/page/punches/index.vue'),
            meta: { title: '打卡器', name: ['打卡器'] }
          },
          {
            path: '/AccountBook',
            // icon: 'el-icon-lx-home',
            component: () => import('@/views/page/AccountBook/index.vue'),
            meta: { title: '小账本', name: ['小账本'] }
          },
        ]
      },
]