<template>
  <div class="user-auth">
    <top title="实名认证" :showBack="true"></top>
    <div class="input">
      <h3>证件不在身边，可手动输入</h3>
      <div class="wrap">
        <div>
          <Icon type="ios-person-outline" size="30"></Icon>
          <input type="text" placeholder="请输入真实姓名">
        </div>
        <div>
          <Icon type="card" size="30"></Icon>
          <input type="text" placeholder="请输入证件号码">
        </div>
      </div>
    </div>
    <div class="camera">
      <h3>
        <span class="xian"></span>
        <span style="margin: 0 10px;">或</span>
        <span class="xian"></span>
      </h3>
      <div class="wrap">
        <div class="front">扫描身份证正面</div>
        <div class="end">扫描身份证背面</div>
      </div>
    </div>
    <div class="submit">
      <h3>您的个人信息仅用于身份验证</h3>
      <div style="padding: 0 10px;">
        <Button v-if="ok" type="warning" long style="height: 40px;font-size: 16px;">下一步</Button>
        <Button v-else disabled="disabled" long style="height: 40px;font-size: 16px;">下一步</Button>
      </div>
    </div>
  </div>
</template>
<script>
  import top from '@/components/top'
  export default {
    data () {
      return {
        ok: false
      }
    },
    components: {
      top
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../common/scss/mixins';
  .user-auth {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f8;
    color: #7a7a7a;
    font-size: 16px;
    .input, .submit {
      h3 {
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
    }
    .input {
      .wrap {
        background-color: #fff;
        padding-left: 15px;
        & > div {
          display: flex;
          align-items: center;
          height: 50px;
          &:not(:last-child) {
            @include border-1px-bottom(#aaa);
          }
        }
        i {
          width: 40px;
        }
        input {
          border: none;
          outline: none;
          flex: 1;
        }
      }
    }
    .camera {
      margin-top: 50px;
      margin-bottom: 50px;
      h3 {
        padding: 0 10px;
        display: flex;
        align-items: center;
        .xian {
          flex: 1;
          @include border-1px-top(#aaa);
        }
      }
      .wrap {
        height: 100px;
        margin-top: 10px;
        padding: 0 10px;
        display: flex;
        & > div {
          flex: 1;
          height: 100%;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
