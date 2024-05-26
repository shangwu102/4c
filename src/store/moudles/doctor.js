import {getDoctorToken,setDoctorToken,getDoctorName,setDoctorName,getDoctorCertificateNumber,setDoctorCertificateNumber} from '@/utils/localStorage'
const state = {
  doctorToken: getDoctorToken() || '',
  name: getDoctorName() || '',
  certificateNumber: getDoctorCertificateNumber() || ''
}
const mutations = {
  // 保存token
  saveTokenDoctor (state, token) {
    state.doctorToken = token
    setDoctorToken(token)
  },
  // 保存医生姓名
  saveNameDoctor (state, name) {
    state.name = name
    setDoctorName(name)
  },
  // 保存医生执业资格证
  saveCertificateNumber (state, certificateNumber) {
    state.certificateNumber = certificateNumber
    setDoctorCertificateNumber(certificateNumber)
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
