
const TOKEN_NAME = 'my-token'
// 1. 保存
export const setToken = (tokenObj) => {
  localStorage.setItem(TOKEN_NAME, JSON.stringify(tokenObj))
}

// 2. 获取
export const getToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN_NAME))
}

// 3. 删除
export const delToken = () => {
  localStorage.removeItem(TOKEN_NAME)
}