export default {
    install(Vue, x, y) {
        console.log(x, y)
        // 定义全局过滤器
        Vue.filter('mySlice', function (val) {
            return val.slice(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element) {
                element.focus()
            },
            // 指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 200,
                    y: 400
                }
            }
        })

        // 给 Vue原型上添加一个方法( vm 和 vc 都能用)
        Vue.prototype.hello = () => { alert("你好啊") }
    }
}

