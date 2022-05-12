import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth"
import db from '../firebase/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {

    //setting the state from the store to the variables
    setProfileInfo(state, payload) {
      state.payloadId = payload.id
      state.profileEmail = payload.data().email
      state.profileFirstName = payload.data().firstName
      state.profileLastName = payload.data().lastName
      state.profileUserName = payload.data().userName
      console.log('PROFILE STATE',state)
      console.log('PROFILE STATE',state)
    },

    //updated user
    updateUser(state, payload) {
      state.user = payload
    },

    //setting the profile initials
    setProfileInitials(state) {
      state.profileInitials =
          //this just get the 1st from the first name and 1st from the lastname
          state.profileFirstName.match(/(\b\S)?/g).join('').toUpperCase() +
          state.profileLastName.match(/(\b\S)?/g).join('').toUpperCase()
    },
  },
  actions: {
    async getCurrentUser({commit}) {
      //get the current user that is logged in, will get that document
      const database = await db.collection('users').doc(firebase.auth().currentUser.uid)
      const dbResults = await database.get()
      commit('setProfileInfo', dbResults)
      commit('setProfileInitials')
      console.log('DbRESULTS', dbResults)
    },
  },
  modules: {
  }
})
