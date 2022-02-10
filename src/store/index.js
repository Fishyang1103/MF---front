import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // 註冊了 user 的模組 （好處是資料分開放
    user
  },
  // Local Storage
  plugins: [createPersistedState({
    key: 'MF - FlowerShop',
    paths: ['user.token']
  })]
})
