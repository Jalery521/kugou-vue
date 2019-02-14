import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPlay: true,
    playerShow: false,
    playList: [],
    currentPlayInfo: {}
  },
  getters: {
    maxId: state => {
      let num = 0
      state.playList.forEach(item => {
        if (item.id > num) {
          num = item.id
        }
      })
      return num
    }
  },
  mutations: {
    changePlayState (state, newState) {
      state.isPlay = newState
    },
    cutPlayerShow (state, newState) {
      state.playerShow = newState
    },
    changeCurrentPlayInfo (state, obj) {
      state.currentPlayInfo = obj
    },
    nextInfo (state) {
      let length = state.playList.length
      for (let i = 0; i < length; i++) {
        if (state.playList[i].id === state.currentPlayInfo.id && state.playList[i + 1]) {
          state.currentPlayInfo = state.playList[i + 1]
          break
        }
      }
    },
    changePlayList (state, arr) {
      state.playList = arr
    }
  },
  actions: {
    changePlayList ({ commit }, arr) {
      commit('changePlayList', arr)
    },
    changeCurrentPlayInfo ({ commit }, obj) {
      commit('changeCurrentPlayInfo', obj)
    }
  }
})
