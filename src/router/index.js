import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from './models/layout'//主页
import test from './models/test'//测试

Vue.use(VueRouter)

const routes = [
  ...layout,//主页路由
  ...test,//测试

]


// 路由的拦截器 beforeEach，该方法可以接收一个函数作为参数
// 使用钩子函数对路由进行权限跳转

// router.beforeEach((to, Form, next) => {
//   // 动态设置标题路由
//   document.title = `${to.meta.title}`
//   // 获取token值
//   const token = store.state.token

//   // 判断是否是非登录页
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   } else {
//     // 如果不是，就判断是否有token值，因为现在没有token值，所以就没有用token判断
//     if (token) {
//       // 如果有，就接着放过
//       next()
//     } else {
//       // 如果没有就回到登录页
//       next('/login')
//     }
//     // next()
//   }
// })

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
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
