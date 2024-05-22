const getDefaultState = () => {
  return {
    vaccines: [
      { name: "乙肝疫苗", stock: 100 },
      { name: "卡介苗", stock: 100 },
      { name: "脊灰疫苗", stock: 100 },
      { name: "百白破疫苗", stock: 100 },
      { name: "白破疫苗", stock: 100 },
      { name: "麻风(麻疹)疫苗", stock: 100 },
      { name: "麻腮风(麻疹)疫苗", stock: 100 },
      { name: "乙脑减毒活疫苗", stock: 100 },
      { name: "A群流脑疫苗", stock: 100 },
      { name: "A+C群流脑疫苗", stock: 100 },
      { name: "甲肝减毒活疫苗", stock: 100 },
    ]
  };
};
const loadStateFromLocalStorage = () => {
  const storedState = localStorage.getItem('vuex-vaccines');
  if (storedState) {
    return JSON.parse(storedState);
  } else {
    return getDefaultState();
  }
};

const state = loadStateFromLocalStorage()
const mutations = {
  change_stock(state,{name,amount}) {
    const vaccine = state.vaccines.find(v => v.name === name)
    if(vaccine && vaccine.stock > 0) {
      vaccine.stock += amount;
      localStorage.setItem('vuex-vaccines',JSON.stringify(state))
    }

  }
}
const actions = {
  changeStock(context,obj) {
    context.commit('change_stock', obj)
  }
}
const getters = {

}
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters

}
