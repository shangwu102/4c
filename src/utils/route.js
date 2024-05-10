import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/LoginPage.vue'
import Login from '@/views/MyLogin.vue'
import NotFund from '@/views/NotFund.vue'
import Register from '@/views/MyRegister.vue'
import Doctor from '@/views/RoleDoctor.vue'
import User from '@/views/RoleUser.vue'
import {getToken} from '@/utils/localStorage'
Vue.use(VueRouter)
const routes = [
  {path:'/',redirect:'/home'},
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/doctor', component: Doctor },
  { path: '/user', component: User },
  { path: '*', component: NotFund }
]
const router = new VueRouter({
  routes
})
// 存放需要权限访问的路径
const authUrls = ['/doctor','/user']
// 全局前置导航守卫
// 所有路由在被访问之前，要先经过全局前置守卫
router.beforeEach((to, from, next) => {
  if(!authUrls.includes(to.path)) {
    // 非权限页面直接放行
    next()
    return
  }
  // 是权限页面
  const token = getToken()
  if(token) {
    next()
  } else {
    next('/home')
  }
})
export default router