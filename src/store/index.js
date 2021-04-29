import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios-auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: '',
  },

  getters: {
    getIdToken: (state) => state.idToken,
  },

  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken
    },
  },

  actions: {
    login({ commit }, authData) {
      axios
        .post(
          '/accounts:signInWithPassword?key=AIzaSyAgAHss_S5xeI37DStGTysgzCXWGjoEtlc',
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          commit('updateIdToken', response.data.idToken)
          console.log(response)
        })
    },
    signin({ commit }, authData) {
      axios
        .post('/accounts:signUp?key=AIzaSyAgAHss_S5xeI37DStGTysgzCXWGjoEtlc', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          commit('updateIdToken', response.data.idToken)
        })
    },
  },

  modules: {},
})
