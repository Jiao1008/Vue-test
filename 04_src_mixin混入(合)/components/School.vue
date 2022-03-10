<template>
  <div class="school">
    <h2 @click="showName">学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入一个混合
// import { mixin } from "../mixin";

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    console.log("你好啊！！！！！！！！！！！！！");
  },
  // mixins: [mixin],
};
</script>

<style>
</style>