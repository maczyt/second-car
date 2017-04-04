<template>
  <div id="app">
    <div class="top">宇涛租车</div>
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import nav from '@/components/nav'
export default {
  name: 'app',
  components: {
    'my-nav': nav
  },
  created () {
    this.$router.replace('/home')
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  html, body {font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
  #app {
    .top {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: rgb(27, 43, 59 );
      color: #fff;
      box-shadow: 0 2px 5px #666;
    }
  }
</style>
