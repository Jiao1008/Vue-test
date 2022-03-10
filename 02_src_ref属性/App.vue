<template>
  <div>
    <!-- ref 相当于 id，为元素打标识 -->
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <!-- 脚手架下可用自闭合标签 -->
    <School ref="sch" />
  </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎学习Vue!",
    };
  },
  methods: {
    showDOM() {
      this.$refs.title.innerHTML = "你点了按钮!";
      console.log(this.$refs.btn); // 真实DOM元素
      console.log(this.$refs.sch); // School组件的实例对象(vc)
    },
  },
};
</script>

<style>
</style>