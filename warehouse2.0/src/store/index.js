import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth"
import db from '../firebase/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //user
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,

    //clients
    companyName: null,
    building: null,
    officePark: null,
    addressLine1: null,
    addressLine2: null,
    city: null,
    provence: null,
    postalCode: null,
    clientFirstName: null,
    clientLastName: null,
    clientMobile: null,
    clientLandline: null,
    clientEmail: null,
    clientSpecialInstructions: null,

    //shipment

    //containers
  },
  mutations: {

    //setting the state from the store to the variables
    setProfileInfo(state, payload) {
      state.profileId = payload.id
      state.profileEmail = payload.data().email
      state.profileFirstName = payload.data().firstName
      state.profileLastName = payload.data().lastName
      state.profileUserName = payload.data().userName
      state.profileAdmin = payload.data().admin
    },
    changeFirstName(state, payload) {
      this.state.profileFirstName = payload
    },
    changeLastName(state, payload) {
      this.state.profileLastName = payload
    },
    changeUserName(state, payload) {
      this.state.profileUserName = payload
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

    //client Mutations
    setCompanyName(state, payload) {
      state.companyName = payload
    },
    setBuilding(state, payload) {
      state.building = payload
    },
    setOfficePark(state, payload) {
      state.officePark = payload
    },
    setAddressLine1(state, payload) {
      state.addressLine1 = payload
    },
    setAddressLine2(state, payload) {
      state.addressLine2 = payload
    },
    setCity(state, payload) {
      state.city = payload
    },
    setProvence(state, payload) {
      state.provence = payload
    },
    setPostalCode(state, payload) {
      state.postalCode = payload
    },
    setClientFirstName(state, payload) {
      state.clientFirstName = payload
    },
    setClientLastName(state, payload) {
      state.clientLastName = payload
    },
    setClientMobile(state, payload) {
      state.clientMobile = payload
    },
    setClientLandline(state, payload) {
      state.clientLandline = payload
    },
    setClientEmail(state, payload) {
      state.clientEmail = payload
    },
    setClientSpecialInstructions(state, payload) {
      state.clientSpecialInstructions = payload
    },
    
  },
  actions: {
    async getCurrentUser({commit}) {
      //get the current user that is logged in, will get that document
      const database = await db.collection('users').doc(firebase.auth().currentUser.uid)
      const dbResults = await database.get()
      commit('setProfileInfo', dbResults)
      commit('setProfileInitials')
      console.log('USER USER', dbResults)
    },

    async updateUserSettings({commit, state}) {
      console.log('STATE', state)
      const database = await db.collection("users").doc(state.profileId)
      await database.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName
      })
      //commit will update the current state
      commit('setProfileInitials')
    },
  },
  modules: {
  }
})
