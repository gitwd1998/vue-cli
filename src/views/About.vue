<template>
  <div class="about">
    <h1>This is an about page</h1>
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
  </div>
</template>
<style scoped>
.swiper-slide {
  width: 100%;
  height: 300px;
  font: 30px/100px "";
  background: #ccc;
}
</style>
<script>
export default {
  mounted() {
    this.$("h1").css("fontFamily", "幼圆");
    this.$ajax
      .post(
        "http://127.0.0.1:3000/init",
        this.$querystring.stringify({
          name: "张三",
          age: 18,
          sex: "男",
          time: new Date().getTime(),
        })
      )
      .then(() => {
        console.log("请求成功");
      })
      .catch((err) => console.log(err));
    new this.$swiper(".swiper-container", {
      autoplay: 2000,
      pagination: ".swiper-pagination",
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
    });
  },
};
</script>
