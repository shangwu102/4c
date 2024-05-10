import Vue from 'vue'
import App from './App.vue'
import '@/utils/element-ui'
import '@/style/common.css'
import router from '@/utils/route'
import '@/utils/plugin'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
