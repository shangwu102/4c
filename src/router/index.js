import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/MyLayout.vue' // 首页
import Test from '@/views/MyTest.vue' // 首页
import Login from '@/views/MyLogin.vue' // 登录页面
import NotFund from '@/views/NotFund.vue' // 不存在提示页面
import Register from '@/views/MyRegister.vue' // 注册页面
import Doctor from '@/views/RoleDoctor.vue' // 医生主界面
import User from '@/views/RoleUser.vue' // 用户主界面
import OptionOne from '@/views/OptionOne.vue' // 儿童接种时间页面
import commit from '@/views/DoctorComit.vue' // 医生上链信息页面
import Welcome1 from '@/views/MyWelcomeDoctor.vue' // 医生欢迎页面
import Welcome2 from '@/views/MyWelcomeUser.vue' // 用户欢迎页面
import query from '@/views/UserQuery.vue' // 用户查询页面
import PersonalDoctor from '@/views/PersonalCenterDoctor' // 医生个人中心
import PersonalCenterUser from '@/views/PersonalCenterUser' // 用户个人中心
import ReservationDoctor from '@/views/ReservationDoctor.vue' // 处理预约页面
import ReservationUser from '@/views/ReservationUser.vue' // 申请预约页面
import InventoryPage from '@/views/InventoryPage.vue' // 疫苗库存页面
import AppointmentVaccines from '@/views/AppointmentVaccines.vue' // 用户预约页面
import ProcessingAppointments from '@/views/ProcessingAppointments.vue' // 查看预约页面
import { getToken } from '@/utils/localStorage'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/test', component: Test },
  {
    path: '/doctor',
    component: Doctor,
    children: [
      { path: '/doctor/welcome', component: Welcome1 },
      { path: '/doctor/query', component: query },
      { path: '/doctor/personal', component: PersonalDoctor },
      { path: '/doctor/commit', component: commit },
      { path: '/doctor/reservation', component: ReservationDoctor },
      { path: '/doctor/inventory', component: InventoryPage },
      { path: '/doctor/processing', component: ProcessingAppointments },
    ]
  },
  {
    path: '/user',
    component: User,
    children: [
      { path: '/user/welcome', component: Welcome2 },
      { path: '/user/option11', component: OptionOne },
      { path: '/user/query', component: query },
      { path: '/user/reservation', component: ReservationUser },
      { path: '/user/personal', component: PersonalCenterUser },
      { path: '/user/view', component: AppointmentVaccines },
    ]
  },
  { path: '/home', component: Home, },
  { path: '*', component: NotFund }
]

const router = new VueRouter({
  routes
})

// 存放需要权限访问的路径
const authUrls = ['/doctor', '/user']

// 全局前置导航守卫
// 所有路由在被访问之前，要先经过全局前置守卫
router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    // 非权限页面直接放行
    next()
    return
  }
  // 是权限页面
  const token = getToken()
  if (token) {
    next()
  } else {
    next('/home')
  }
})

export default router
