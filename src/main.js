// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import router from './router'
import FastClick from 'fastclick'
import 'iview/dist/styles/iview.css'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
