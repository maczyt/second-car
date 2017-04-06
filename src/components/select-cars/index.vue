<template>
  <div class="select-car">
    <top :showBack="true" title="选择车型"></top>
    <div class="marquee">
      <div class="wrap">
        <p>世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。</p>
      </div>
    </div>
    <div class="cars">
      <div class="t"></div>
    </div>
  </div>

</template>
<script>
  import top from '@/components/top'
  export default {
    components: {
      top
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @keyframes marquee {
    0% {
      left: 150%;
    }
    20% {
      left: 90%;
    }
    40% {
      left: 30%;
    }
    60% {
      left: -30%;
    }
    80% {
      left: -90%;
    }
    100% {
      left: -150%;
    }
  }
  .select-car {
    background-color: #eee;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .marquee {
      width: 100%;
      height: 45px;
      line-height: 45px;
      background-color: #ffc;
      font-size: 14px;
      .wrap {
        width: 80%;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        height: 100%;
        p {
          position: absolute;
          left: 100%;
          animation: marquee 9s infinite;
          white-space: nowrap;
        }
      }
    }
    .cars {
      flex: 1;
      overflow-y: auto;
      .t {
        height: 2000px
      }
    }

  }
</style>
