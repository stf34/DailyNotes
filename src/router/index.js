import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: () => import('../views/coverpage/index.vue')
    },
    {
      path: '/layout',
      component: () => import('../views/page/layout/index.vue'),
      meta: { name:'首页', title: '描述文件' },
      children: [
        {
          path: '/home',
          // icon: 'el-icon-lx-home',
          component: () => import('../views/page/home/index.vue'),
          meta: { title: '首页', name: ['首页'] }
        },
        {
          path: '/SomeNotes',
          // icon: 'el-icon-lx-home',
          component: () => import('../views/page/SomeNotes/index.vue'),
          meta: { title: '点滴记', name: ['点滴记'] }
        },
        {
          path: '/punches',
          // icon: 'el-icon-lx-home',
          component: () => import('../views/page/punches/index.vue'),
          meta: { title: '打卡器', name: ['打卡器'] }
        },
        {
          path: '/AccountBook',
          // icon: 'el-icon-lx-home',
          component: () => import('../views/page/AccountBook/index.vue'),
          meta: { title: '小账本', name: ['小账本'] }
        },
      ]
    }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

/* 解决
如果路由地址跳转相同, 且没有捕获到错误，控制台始终会出现如下所示的警告
vue-router.esm.js?8c4f:1958 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/home".
*/
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
