<template>
  <div class="demo">
    <h2>学校姓名：{{ name }}</h2>
    <h2 class="qwe">学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "北京",
    };
  },
};
</script>

<style lang="less">
//  less 允许样式嵌套，css 不可以
.demo {
  background: skyblue;
  .qwe {
    font-size: 30px;
  }
}
</style>