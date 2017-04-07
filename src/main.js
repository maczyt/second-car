// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import iView from 'iview'
import router from './router'
import FastClick from 'fastclick'
import 'iview/dist/styles/iview.css'
import store from './store'
import './common/scss/index.scss'

window.moment = require('moment')
window.moment.locale('zh-cn')

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
