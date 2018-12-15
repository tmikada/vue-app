import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  auth: {
    token: null,
    userid: null,
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
