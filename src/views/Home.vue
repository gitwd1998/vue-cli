<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <router-link v-for="i in page" :key="i.name" :to="{ path: i.path }">{{
      i.name
    }}</router-link>
  </div>
</template>
<script>
// import axios from "axios";
// import qs from "qs";
// import querystring from "querystring";
import $ from "jquery";
import swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      page: [
        { path: "###", name: "嘎嘎嘎" },
        { path: "info", name: "啊啊啊" },
        { path: "/info", name: "不不不" },
        { path: "##ss", name: "顶顶顶" },
      ],
    };
  },
  mounted() {
    console.log("home组件", this);
    // axios("http://127.0.0.1:3000/init", {
    //   method: "post",
    //   data: { name: "张三", age: 18, sex: "男", time: new Date() },
    // })
    //   .then(() => console.log("请求成功"))
    //   .catch((err) => console.log(err));
    // 在created的时候data已经存在了，但尚未挂载，真实dom尚不可用
    // 所以不能用jQuery在created阶段获取dom元素
    // 所以不能在created阶段初始化swiper
    $("li").css({ margin: "10px", cursor: "pointer" });
    new swiper(".swiper-container", {
      autoplay: 1000,
      pagination: ".swiper-pagination",
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
    });
  },
};
</script>
<style>
.bg {
  background: teal;
}
.swiper-slide {
  width: 100%;
  height: 300px;
  font: 30px/100px "";
  background: wheat;
}
</style>