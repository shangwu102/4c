const USER_TOKEN = 'userToken'
const DOCTOR_TOKEN = 'doctorToken'
const USER_NAME = 'userName'
const DOCTOR_NAME = 'doctorName'
const DOCTORCERTIFICATENUMBER = 'doctorCertificateNumber'
const TYPE = 'type'
// 1. 保存用户token
export const setUserToken = (tokenObj) => {
  localStorage.setItem(USER_TOKEN, JSON.stringify(tokenObj))
}

// 2. 获取用户token
export const getUserToken = () => {
  return JSON.parse(localStorage.getItem(USER_TOKEN))
}

// 3. 删除用户token
export const delUserToken = () => {
  localStorage.removeItem(USER_TOKEN)
}

// 1. 保存医生token
export const setDoctorToken = (tokenObj) => {
  localStorage.setItem(DOCTOR_TOKEN, JSON.stringify(tokenObj))
}

// 2. 获取医生token
export const getDoctorToken = () => {
  return JSON.parse(localStorage.getItem(DOCTOR_TOKEN))
}

// 3. 删除医生token
export const delDoctorToken = () => {
  localStorage.removeItem(DOCTOR_TOKEN)
}


// 1. 保存用户姓名
export const setUserName = (tokenObj) => {
  localStorage.setItem(USER_NAME, JSON.stringify(tokenObj))
}

// 2. 获取用户姓名
export const getUserName = () => {
  return JSON.parse(localStorage.getItem(USER_NAME))
}

// 3. 删除用户姓名
export const delUserName = () => {
  localStorage.removeItem(USER_NAME)
}


// 1. 保存医生姓名
export const setDoctorName = (tokenObj) => {
  localStorage.setItem(DOCTOR_NAME, JSON.stringify(tokenObj))
}

// 2. 获取医生姓名
export const getDoctorName = () => {
  return JSON.parse(localStorage.getItem(DOCTOR_NAME))
}

// 3. 删除医生姓名
export const delDoctorName = () => {
  localStorage.removeItem(DOCTOR_NAME)
}



// 1. 保存医生职业证书编号
export const setDoctorCertificateNumber = (tokenObj) => {
  localStorage.setItem(DOCTORCERTIFICATENUMBER, JSON.stringify(tokenObj))
}

// 2. 获取医生职业证书编号
export const getDoctorCertificateNumber = () => {
  return JSON.parse(localStorage.getItem(DOCTORCERTIFICATENUMBER))
}

// 3. 删除医生职业证书编号
export const delDoctorCertificateNumber = () => {
  localStorage.removeItem(DOCTORCERTIFICATENUMBER)
}






export const setType = (tokenObj) => {
  localStorage.setItem(TYPE, JSON.stringify(tokenObj))
}

// 2. 获取用户token
export const getType = () => {
  return JSON.parse(localStorage.getItem(TYPE))
}

// 3. 删除用户token
export const delType = () => {
  localStorage.removeItem(TYPE)
}