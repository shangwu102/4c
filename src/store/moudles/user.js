const state = {
  usetToken:''
}
const mutations = {
  // 保存token
  saveToken(state,token) {
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