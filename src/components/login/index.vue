<template>
  <div class="login">
    <div class="wrap">
      <div class="logo">
        <Icon type="model-s" size="50" color="#fff"></Icon>
      </div>
      <Form :model="formItem">
        <Form-item prop="user">
          <Input type="text" v-model="formItem.phone" placeholder="手机号码">
          <Icon type="iphone" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="formItem.password" placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" style="width: 100%;" @click="handleSubmit">登录</Button>
        </Form-item>
        <Form-item>
          <Button type="warning" @click="reg">注册会员</Button>
          <Button type="info" style="float: right;" @click="forgetPW">忘记密码?</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>
<script>
  import { setStore, server } from '@/config/utils'
  export default {
    data () {
      return {
        formItem: {
          phone: '',
          password: ''
        }
      }
    },
    methods: {
      reg () {
        this.$router.replace('/reg')
      },
      forgetPW () {
        this.$router.replace('/forgetPW')
      },
      handleSubmit(name) {
        var user = {
          mobile: this.formItem.phone,
          password: this.formItem.password
        };
        this.$http.post(`${server}/signin`, user)
          .then(res => {
            var json = res.body;
            if (json.status) {
              this.$Message.success(json.msg);
              this.$store.commit('RECORD_USERINFO', json.user);
              this.$store.commit('CHECK_LOGIN', true);
              setStore('user', json.user);
              setTimeout(() => { this.$router.go(-1) }, 1000)
            } else {
              this.$Message.error(json.msg);
            }
          })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .login {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: url("./bg.jpg") no-repeat center;
    background-size: cover;
    .wrap {
      width: 80%;
      margin: 50px auto 0;
      .logo {
        margin: 0 auto 30px;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .2);
        box-shadow: 0 0 0 1px #edb718, 0 0 3px #edb718;
        border-radius: 50%;
      }
    }
  }
</style>
