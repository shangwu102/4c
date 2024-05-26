import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/moudles/user'
import doctor from '@/store/moudles/doctor'
import vaccinum from './moudles/vaccinum'
import {getType,setType} from '@/utils/localStorage'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    type:getType() || ''
  },
  mutations:{
    saveType(state,type) {
      state.type = type
      setType(type)
    }
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