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
        <a href="javascript:" @click="logout">退出登录</a>
      </section>
    </div>
  </div>
</template>
<script>
  import top from '@/components/top'
  import nav from '@/components/nav'
  import { getStore, removeStore } from '@/config/utils'
  export default {
    methods: {
      toAuth () {
        this.$router.push('toAuth')
      },
      logout () {
        // 不请求，直接前台处理
        removeStore('user');
        this.$store.commit('CHECK_LOGIN', false);
        this.$router.go(-1);
      }
    },
    components: {
      top,
      'my-nav': nav
    },
    created () {
      if (getStore('user')) {
        this.$store.commit('CHECK_LOGIN', true)
      }
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
