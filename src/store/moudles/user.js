const state = {
  usetToken:''
}
const mutations = {
  // 保存token
  saveTokenUser(state,token) {
    state.usetToken = token
  }
}
const actions = {

}
const getters = {
  
}
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}