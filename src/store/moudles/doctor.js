const state = {
  doctorToken: localStorage.getItem('doctorToken') || '',
  name: localStorage.getItem('doctorName') || '',
  certificateNumber: localStorage.getItem('doctorCertificateNumber') || ''
}

const mutations = {
  // 保存token
  saveTokenDoctor (state, token) {
    state.doctorToken = token
    localStorage.setItem('doctorToken', token)
  },
  // 保存医生姓名
  saveNameDoctor (state, name) {
    state.name = name
    localStorage.setItem('doctorName', name)
  },
  // 保存医生执业资格证
  saveCertificateNumber (state, certificateNumber) {
    state.certificateNumber = certificateNumber
    localStorage.setItem('doctorCertificateNumber', certificateNumber)
  }
}

const actions = {}

const getters = {
  // 获取医生姓名
  getDoctorName: state => state.name,
  // 获取医生执业资格证
  getDoctorCertificateNumber: state => state.certificateNumber
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
