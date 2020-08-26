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
        path: '/moth',
        // icon: 'el-icon-lx-home',
        component: () => import('../views/page/home/moth/index.vue'),
        meta: { title: '首页', name: ['首页'] }
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
