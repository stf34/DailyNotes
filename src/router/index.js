import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: () => import('../views/page/coverpage/index.vue')
  },
  {
    path: '/layout',
    component: () => import('../views/page/layout/index.vue'),
    meta: { name:'首页', title: '描述文件' },
    children: [
      {
        path: '/',
        // icon: 'el-icon-lx-home',
        component: () => import('../views/page/home/index/index.vue'),
        meta: { title: '首页', name: ['首页'] }
      },
      {
        path: '/LazyLoading',
        // icon: 'el-icon-lx-home',
        component: () => import('../views/page//PackageComponents/LazyLoading/index.vue'),
        meta: { title: '懒加载实现', name: ['懒加载实现'] }
      },
      {
        path: '/PageMonitoring',
        // icon: 'el-icon-lx-home',
        component: () => import('../views/page/PackageComponents/PageMonitoring/index.vue'),
        meta: { title: '页面监听', name: ['页面监听'] }
      },
      {
        path: '/img',
        // icon: 'el-icon-lx-home',
        component: () => import('../views/page/PackageComponents/SelectAll/index.vue'),
        meta: { title: '页面监听', name: ['页面监听'] }
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
