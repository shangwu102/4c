import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/moudles/user'
import doctor from '@/store/moudles/doctor'
import vaccinum from './moudles/vaccinum'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{

  },
  mutations:{

  },
  actions:{

  },
  getters:{

  },
  modules:{
    user,
    doctor,
    vaccinum
  }
})
export default store