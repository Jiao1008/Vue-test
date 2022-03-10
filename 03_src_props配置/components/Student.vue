<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">点我修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    console.log(this);
    return {
      msg: "我是尚硅谷学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge = 99;
    },
  },
  // props: ["name", "sex", "age"],    // 简单声明接收
  /* props: {
    // 接收的同时对数据进行类型限制
    name: String,
    sex: String,
    age: Number,
  },*/
  props: {
    // 接收的同时对数据：类型限制+默认值指定+必要性限制
    name: {
      type: String, // name的类型是字符串
      required: true, //name是必要的}
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style>
.school {
  background-color: skyblue;
}
</style>