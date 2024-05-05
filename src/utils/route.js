import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/LoginPage.vue'
import Login from '@/views/MyLogin.vue'
import NotFund from '@/views/NotFund.vue'
import Register from '@/views/MyRegister.vue'
import Doctor from '@/views/RoleDoctor.vue'
import User from '@/views/RoleUser.vue'
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
export default router