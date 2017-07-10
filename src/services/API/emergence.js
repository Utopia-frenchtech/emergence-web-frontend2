/**
 * Requests related to the interface gamification, experience for example
 */
import Axios from './Axios'
import store from '@/config/vuex/store'
import localStorageHelpers from '@/helpers/localStorageHelpers'

// TODO : remove this when using the real API
let exp = 0
export const emergence = {
  /**
  * Get the current user experience
  * @return {*} [description]
  */
  getExp: () => {
    return new Promise((resolve, reject) => {
      exp = (exp + 5)
      const newExp = {
        current: exp % 100,
        total: 100,
        level: Math.floor(exp / 100),
      }
      localStorageHelpers.setJSONItem('exp', newExp)
      store.commit('updateExp', newExp)
      resolve(newExp)
    })
  },
  _getExp: () => {
    return Axios.get('/experience')
    .then((res) => {
      return res.data
    })
  }
}

export default emergence
