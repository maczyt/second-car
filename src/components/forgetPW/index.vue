<template>
  <div class="forgetPW">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <div class="form-group">
        <Form-item prop="phone">
          <Input type="text" v-model="formInline.user" placeholder="请输入手机号">
          <Icon type="iphone" slot="prepend"></Icon>
          <span slot="prepend"> 手机号</span>
          </Input>
        </Form-item>
        <Button type="info" slot="append">获取验证码</Button>
      </div>
      <Form-item prop="yzm">
        <Input type="text" v-model="formInline.password" placeholder="请输入验证码">
        <Icon type="email" slot="prepend"></Icon>
        <span slot="prepend"> 验证码</span>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        <span slot="prepend"> 密码</span>
        </Input>
      </Form-item>
      <Form-item prop="rePassword">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        <span slot="prepend"> 确认</span>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formInline')" long>提交</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
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
  .forgetPW {
    width: 80%;
    margin: 100px auto 0;
    font-size: 16px;
    .ivu-icon {
      font-size: 1.3em;
    }
    .form-group {
      display: flex;
      .ivu-form-item {
        flex: 1
      }
      .ivu-btn {
        height: 32px;
        &:active {
          opacity: .8;
        }
      }
    }
    .getYzm {
      &:active {
        opacity: .8;
      }
    }
  }
</style>
