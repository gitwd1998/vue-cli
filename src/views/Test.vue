<template>
  <div>
    <prop-component></prop-component>
    <component_props :obj="f"></component_props>
    <ul>
      <li>父组件显示的值</li>
      <li>{{ f.name }}</li>
      <li>{{ f.sex }}</li>
      <li>{{ f.age }}</li>
    </ul>
  </div>
</template>
<script>
import component_props from "../components/component-props";
export default {
  components: { component_props },
  data() {
    return {
      f: {
        name: "张三",
        age: 18,
        sex: "男",
      },
    };
  },
};
</script>
<style>
ul {
  border: 1px solid teal;
}
</style>