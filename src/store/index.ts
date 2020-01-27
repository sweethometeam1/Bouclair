import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainTabIndex: 0,
    mainTabLength: 0
  },
  mutations: {
    setMainTabIndex: (state: any, value: number) => {
      state.mainTabIndex = value
    },
    setMainTabLength: (state: any, value: number) => {
      state.mainTabLength = value
    }
  },
  actions: {
  },
  modules: {
  }
})
