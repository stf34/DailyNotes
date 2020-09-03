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
