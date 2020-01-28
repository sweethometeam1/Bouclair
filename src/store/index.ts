import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sceneCurtain: '/images/curtains/1.png',
    sceneWallColor: '#f2f2f2',
    mainTabIndex: 0,
    mainTabLength: 0
  },
  mutations: {
    setSceneCurtain: (state: any, value: string) => {
      state.sceneCurtain = value
    },
    setSceneWallColor: (state: any, value: string) => {
      state.sceneWallColor = value
    },
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
