// 引入Vue
import Vue from 'vue'
// 引入总组件
import App from './App.vue'

import { mixin, mixin2 } from "./mixin";
// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.mixin(mixin2)


new Vue({
  el: '#app',
  render: h => h(App)
})