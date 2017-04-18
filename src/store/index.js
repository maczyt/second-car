import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  selectCar: { // 选车
    pos: { // 地点
      get: '', // 取车
      back: '' // 还车
    },
    date: { // 日期
      get: '', // 取车
      back: '' // 还车
    }
  },
  check: false, // 是否登录
  userInfo: {} // 用户信息
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
