<template>
  <div class="login">
    <div class="wrap">
      <div class="logo">
        <Icon type="model-s" size="50" color="#fff"></Icon>
      </div>
      <Form ref="formItem" :model="formItem" :rules="rule">
        <Form-item prop="user">
          <Input type="text" v-model="formItem.phone" placeholder="Username">
          <Icon type="iphone" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="formItem.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" style="width: 100%;" @click="handleSubmit('formItem')">登录</Button>
        </Form-item>
        <Form-item>
          <Button type="warning">注册会员</Button>
          <Button type="info" style="float: right;">忘记密码?</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          phone: '',
          password: ''
        },
        rule: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
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
