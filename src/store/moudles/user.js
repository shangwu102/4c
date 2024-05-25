const state = {
  usetToken:'',
  name: localStorage.getItem('userName') || '',
}
const mutations = {
  // 保存token
  saveTokenUser(state,token) {
    state.usetToken = token
  },
  // 保存用户名名
  saveNameUser (state, name) {
    state.name = name
    localStorage.setItem('userName', name)
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