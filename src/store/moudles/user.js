import {getUserToken,setUserToken,getUserName,setUserName} from '@/utils/localStorage'
const state = {
  usetToken: getUserToken() || '',
  name: getUserName() || '',
}
const mutations = {
  // 保存token
  saveTokenUser(state,token) {
    state.usetToken = token
    // 保存token到本地
    setUserToken(token)
  },
  // 保存用户名名
  saveNameUser (state, name) {
    state.name = name
    setUserName(name)
  },
}
const actions = {

}
const getters = {
  // 获取用户名
  geUserName: state => state.name,
}
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}