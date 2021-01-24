import {LocalStorage, Loading} from "quasar"
import {firebaseAuth} from 'boot/firebase'
import {showErrorMessage} from "src/functions/function-show-error-message";

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  logoutUser() {
    firebaseAuth.signOut()
  },
  handleAuthStateChange({commit}) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        if (this.$router.currentRoute.path !== '/') {
          this.$router.push('/').catch(r => {
            console.log('auth error', r)
          })
        }
      } else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        if (this.$router.currentRoute.path !== '/auth') {
          this.$router.replace('/auth').catch(r => {
            console.log('auth error', r)
          })
        }
      }
    })
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
