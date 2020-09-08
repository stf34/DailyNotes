import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* store中变量的定义、管理、派生（getter）共享状态（即变量） */
  state: {
    StepsNumber:0,//步骤条初始位置
  },
  /* 
    更改vuex的store中状态的唯一方法，通过提交mutation修改状态，
    同步操作（规则上是不允许异步操作的，虽然异步也可以执行，
    但是对devtool调试的状态跟踪或多个状态更改操作相互依赖是很不好的，
    所以不要觉得只要不报错我就可以这么用，还是尽量按照规则来比较好）
    调用是通过 this.$store.commit 传入对应的type调用
  */
  mutations: {
    changeStepsNumber(state,palval){
      state.StepsNumber = palval.Number//在组件内修改值
    }
  },
  actions: {
  },
  modules: {
  }
})
