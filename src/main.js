import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/rest.css' //清除默认样式
import './assets/js/vant'//引入vant UI 相关组件配置

import local from "./api/localStorage";//全局本地存储数据；
Vue.prototype.local = local;


/* 富文本编辑器 */
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, {
  placeholder: '请输入内容',
});



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
