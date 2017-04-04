<template>
  <Carousel>
    <Carousel-item autoplay>
      <div class="demo-carousel">
        <img src="./banner.jpg" alt="" class="banner-img">
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="./banner.jpg" alt="" class="banner-img">
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="./banner.jpg" alt="" class="banner-img">
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="./banner.jpg" alt="" class="banner-img">
      </div>
    </Carousel-item>
  </Carousel>
</template>
<script>
  export default {
    data () {
      return {
        value1: 1
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .banner-img {
    width: 100%;
    max-height: 200px;
  }
</style>
