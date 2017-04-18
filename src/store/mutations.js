import {
  SELECT_CARS,
  RECORD_USERINFO,
  CHECK_LOGIN
} from './mutation-types'

export default {
  [SELECT_CARS] (state, payload) {
    // console.log(payload)
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info;
  },
  // 更改用户登录
  [CHECK_LOGIN] (state, check) {
    state.check = check;
  }
}
