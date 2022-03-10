<template>
  <div>
    <Student name="李斯" sex="女" :age="18" />
    <hr />
    <Student name="王五" sex="男" :age="21" />
    <hr />
    <Student name="张三" sex="男" />
  </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { Student },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>