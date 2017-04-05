<template>
  <div id="app">
    <!--<div class="top">宇涛租车</div>-->
    <!--<my-nav></my-nav>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import nav from '@/components/nav'
export default {
  name: 'app',
  components: {
    'my-nav': nav
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  html, body {font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
