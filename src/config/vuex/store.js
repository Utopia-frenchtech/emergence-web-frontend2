/**
 * Vuex store config
 */
import Vuex from 'vuex'
import Vue from 'vue'
import localStorageHelpers from '@/helpers/localStorageHelpers'

Vue.use(Vuex)

const storeConfig = {
  state: {
    user: localStorageHelpers.getJSONItem('user'),
    userId: localStorage.getItem('userId'),
    showLeftMenu: false,
    exp: localStorageHelpers.getJSONItem('exp') || { exp: 0, total: 100, level: 0 },
    color: '#DFCEBC',
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = null
      state.userId = null
    },
    updateExp (state, exp) {
      state.exp = exp
    },
    updateUserId (state, userId) {
      state.userId = userId
    },
    updateColor (state, color) {
      state.color = color
    },
    closeLeftMenu (state) {
      state.showLeftMenu = false
    },
    toggleLeftMenu (state) {
      state.showLeftMenu = !state.showLeftMenu
    }
  },
  getters: {
    isLoggedIn: state => !!state.user
  }
}
export const store = new Vuex.Store(storeConfig)
export default store
