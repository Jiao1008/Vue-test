// 引入Vue
import Vue from 'vue'
// 引入总组件
import App from './App.vue'
// 引入插件
import plugins from './plugins'
// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(plugins, 2, 3)


new Vue({
  el: '#app',
  render: h => h(App)
})