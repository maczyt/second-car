<template>
  <router-view></router-view>
</template>

<script>
import nav from '@/components/nav'
import { getStore } from '@/config/utils'
export default {
  name: 'app',
  components: {
    'my-nav': nav
  },
  mounted () {
    if (getStore(user)) {
      this.$store.commit('CHECK_LOGIN', true);
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  html, body {font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
</style>
