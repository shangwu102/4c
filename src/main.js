import Vue from 'vue'
import App from './App.vue'
import '@/utils/element-ui'
import '@/style/common.css'
import router from '@/utils/route'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
