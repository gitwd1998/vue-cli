<template>
  <div>
    <h1>我是Info页面</h1>
    <anchored-heading />
    <template>
      <el-input v-model="qu" placeholder="请输入问题" />
      <el-input v-model="an" />
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qu: "",
      an: "答案",
    };
  },
  watch: {
    qu() {
      this.an = "等待回应。。。";
      this.$ajax
        .post("http://127.0.0.1:3000/init")
        .then(() => {
          this.an = "请求成功";
        })
        .catch(() => {
          this.an = "请求失败";
        });
    },
  },
};
</script>