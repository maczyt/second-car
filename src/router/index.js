import VueRouter from 'vue-router'
import App from '../App'

const home = r => require.ensure([], () => r(require('@/components/router/home')), 'home')
const near = r => require.ensure([], () => r(require('@/components/router/near')), 'near')
const login = r => require.ensure([], () => r(require('@/components/login')), 'login')
const reg = r => require.ensure([], () => r(require('@/components/reg')), 'reg')
const forgetPW = r => require.ensure([], () => r(require('@/components/forgetPW')), 'forget-password')

const list = r => require.ensure([], () => r(require('@/components/list')), 'list')
const user = r => require.ensure([], () => r(require('@/components/user')), 'user')
const toAuth = r => require.ensure([], () => r(require('@/components/user/auth')), 'toAuth')

// pages
const toDoor = r => require.ensure([], () => r(require('@/components/pages/toDoor')), 'to-door')
const selectCars = r => require.ensure([], () => r(require('@/components/select-cars')), 'select-cars')

const server_terms = r => require.ensure([], () => r(require('@/components/serverTerms')), 'server-terms')

const routes = [
  {
    path: '/',
    component: App, // 顶级路由，对应index.html
    children: [ // 二级路由，对应App.vue
      // 地址为空时跳转home主页
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      },
      // pages
      // 上门取车
      {
        path: '/toDoor',
        component: toDoor
      },
      {
        path: '/select-car',
        component: selectCars
      },

      // 附近门店
      {
        path: '/near',
        component: near
      },
      // 订单列表
      {
        path: '/list',
        component: list
      },
      // 个人中心
      {
        path: '/user',
        component: user
      },
      // 实名认证
      {
        path: '/toAuth',
        component: toAuth
      },
      // 登录
      {
        path: '/login',
        component: login
      },
      // 注册
      {
        path: '/reg',
        component: reg
      },
      // 忘记密码
      {
        path: '/forgetPW',
        component: forgetPW
      },
      // 服务条款
      {
        path: '/server-terms',
        component: server_terms
      }
    ]
  }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

export default router;
