import {LocalStorage} from "quasar";

const state = {}

const mutations = {}

const actions = {
  registerUser({}, payload) {
    console.log('registerUser', payload)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
