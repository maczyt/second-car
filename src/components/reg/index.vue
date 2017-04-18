<template>
  <div class="reg">
    <Form ref="formInline" :model="formItem">
      <div class="form-group">
        <Form-item prop="phone">
          <Input type="text" v-model="formItem.phone" placeholder="请输入手机号" @input="handlePhone">
          <Icon type="iphone" slot="prepend"></Icon>
          <span slot="prepend"> 手机号</span>
          </Input>
        </Form-item>
        <Button type="info" slot="append" :disabled="!phone_input" @click="handleYzm">{{ countDown ? countDown + '秒后重发' : '获取验证码' }}</Button>
      </div>
      <Form-item prop="yzm">
        <Input type="text" v-model="formItem.yzm" placeholder="请输入验证码">
        <Icon type="email" slot="prepend"></Icon>
        <span slot="prepend"> 验证码</span>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="formItem.password" placeholder="请输入密码">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        <span slot="prepend"> 密码</span>
        </Input>
      </Form-item>
      <Form-item prop="rePassword">
        <Input type="password" v-model="formItem.rePw" placeholder="再次输入密码">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        <span slot="prepend"> 确认</span>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit" long>注册</Button>
      </Form-item>
      <div class="check">
        <div class="wrap">
          <Icon type="checkmark-round" size="12" color="#fff"></Icon>
        </div>
        <span>我已经阅读并同意 <a href="#server-terms">《宇涛租车会员服务条款》</a></span>
      </div>
    </Form>
  </div>
</template>
<script>
  import { setStore } from '@/config/utils'
  export default {
    data () {
      return {
        phone_input: false,
        countDown: '',
        formItem: {
          phone: '',
          yzm: '',
          password: '',
          rePw: ''
        }
      }
    },
    methods: {
      handlePhone () {
        this.phone_input = /^1[0-9]{10}$/.test(this.formItem.phone)
      },
      handleYzm () {
        var _this = this,
            time = 60
        _this.countDown = time --
        this.phone_input = false;
        function cd () {
          setTimeout(function () {
            _this.countDown = time --
            if (time > 0) {
              cd();
            } else {
              _this.phone_input = true;
              _this.countDown = ''
            }
          }, 1000)
        }
        cd();
      },
      handleSubmit() {
        var data = {
          mobile: this.formItem.phone,
          pw: this.formItem.password,
          pw2: this.formItem.rePw,
          yzm: this.formItem.yzm
        };
        this.$http.post('http://localhost:8090/signup', data)
          .then(res => {
            var user = res.body;
            this.$Message.success('注册成功！');
            this.$store.commit('RECORD_USERINFO', user);
            this.$store.commit('CHECK_LOGIN', true);
            setStore('user', user);
            setTimeout(() => { this.$router.go(-1) })
          })
          .catch(err => {
            this.$Message.error(err.message);
          });
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .reg {
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
    .check {
      display: flex;
      align-items: center;
      .wrap {
        background-color: #edb718;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 12px;
        margin-left: 5px;
      }
    }
    .getYzm {
      &:active {
        opacity: .8;
      }
    }
  }
</style>
