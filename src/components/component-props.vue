<template>
  <div>
    <ul>
      <li>传入子组件中的值</li>
      <li>{{ nObj.name }}</li>
      <li>{{ nObj.sex }}</li>
      <li>{{ nObj.age }}</li>
    </ul>
    <button @click="nObj = o">直接改变父组件传过来的对象</button>
    <button @click="nObj.name = '哈哈哈哈哈'">
      只改变父组件传过来的对象的属性值
    </button>
  </div>
</template>
<script>
export default {
  name: "component-props",
  props: {
    obj: Object,
  },
  data() {
    return {
      nObj: this.obj,
      o: {
        name: "李四",
        age: 11,
        sex: "女",
      },
    };
  },
};
</script>