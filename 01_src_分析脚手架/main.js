

// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false

/* 
  关于不同版本的vue
    1.vue.js与vue.runtime.xxx.js的区别：
      （1）vue.js是完整版的Vue,包含：核心功能+模板解析器。
      （2）vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器。

    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
      需要使用render函数接收到createElement函数去指定具体渲染的内容。
 */

// 创建Vue实例对象--vm
new Vue({
  // 将App组件放入容器中
  render: h => h(App),
  // render: h => h('h1', '你好啊')

  // template: `<App></App>`,
  // comments: { App }
}).$mount('#app')
