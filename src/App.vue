<template>
  <router-view></router-view>
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
</style>
