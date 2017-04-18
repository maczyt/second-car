<template>
  <div class="user">
    <top :showBack="false" title="我的"></top>
    <my-nav></my-nav>
    <div class="wrap">
      <section class="sec1">
        <div @click="toAuth">
          <Icon type="card" size="20"></Icon>
          <span>实名认证</span>
        </div>
        <div>
          <Icon type="android-list" size="20"></Icon>
          <span>订单列表</span>
        </div>
      </section>
      <section class="sec2">
        <div>
          <Icon type="iphone" size="24"></Icon>
          <span>手机号</span>
        </div>
        <div>
          <Icon type="locked" size="20"></Icon>
          <span>修改密码</span>
        </div>
      </section>
      <section class="sec3">
        退出登录
      </section>
    </div>
  </div>
</template>
<script>
  import top from '@/components/top'
  import nav from '@/components/nav'
  export default {
    methods: {
      toAuth () {
        this.$router.push('toAuth')
      }
    },
    components: {
      top,
      'my-nav': nav
    },
    created () {
      if (!this.$store.getters.getCheck) {
        // 用户未登录
        this.$router.push('login')
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../common/scss/mixins';
  .user {
    width: 100%;
    height: 100vh;
    background-color: #f7f7f8;
    .wrap {
      section {
        background-color: #fff;
        padding-left: 10px;
        margin-top: 15px;
        div {
          height: 45px;
          line-height: 45px;
          display: flex;
          align-items: center;
          font-size: 16px;
          .ivu-icon {
            width: 30px;
          }
          &:not(:last-child) {
            @include border-1px-bottom(#aaa);
          }
        }
        &.sec3 {
          height: 45px;
          line-height: 45px;
          text-align: center;
          color: lightslategrey;
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
  }
</style>
