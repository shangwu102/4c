import axios from 'axios'
import { Message } from 'element-ui';
import { getUserToken, getDoctorToken,getType } from '@/utils/localStorage';
// 创建axios实例，将来对创建出来的实例，进行自定义配置，不会污染原始的axios实例
const instance = axios.create({
  baseURL: 'https://hiwcq.com:8080',
  // timeout: 5000
})


// 添加请求拦截器
instance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  const type = getType();  // 获取 type 值
  let token;
  console.log(type);
  if (type === '1') {
    token = getDoctorToken();
  } else if (type === '2') {
    token = getUserToken();
  }

  if (token) {
    config.headers['token'] = token;
  }
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
  const result = response.data
  // console.log(result);
  if (result.code !== 1) {
    Message({
      type: 'error',
      message: result.msg
    })
    return Promise.reject(result)
  }
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return result
}, function(error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default instance