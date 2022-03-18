<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="plus">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    plus() {
      console.log("plus被调用了");
      this.number++;
    },
    sendStudentName() {
      // 触发student组件实例身上的atguigu事件
      this.$emit("atguigu", this.name, 66, 55, 44);
      // this.$emit("demo");
    },
    unbind() {
      this.$off("atguigu");   // 解绑自定义事件
      // this.$off(["atguigu", "demo"]); // 解绑多个自定义事件
      // this.$off(); // 解绑所有自定义事件
    },
    death() {
      this.$destroy(); // 销毁了当前Student组件的实例，销毁后所有Student组件实例的自定义事件全都失效
    },
  },
};
</script>

<style scoped>
/* 让样式在局部生效，默认 css */
.student {
  background: plum;
  padding: 10px;
}
</style>