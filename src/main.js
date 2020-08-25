import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/vant'//引入vant UI 相关组件配置
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
