<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我展示名称</button>
    <!-- <student></student> -->
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
// 暴露组件
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};

/*  const school = Vue.extend({
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
});
// export { school };
export default school;  */
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>