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
    clientId: null,
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

    clients: [],
    clientsLoaded: false,
    //cargo



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

    //updated user, from app.js to keep state change
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
    setClientId(state, payload) {
      this.state.clientId = payload
      console.log('CLIENT STATE', state)
      console.log('CLIENT PAYLOAD', payload)
    },
    setCompanyName(state, payload) {
      this.state.companyName = payload
    },
    setBuilding(state, payload) {
      this.state.building = payload
    },
    setOfficePark(state, payload) {
      this.state.officePark = payload
    },
    setAddressLine1(state, payload) {
      this.state.addressLine1 = payload
    },
    setAddressLine2(state, payload) {
      this.state.addressLine2 = payload
    },
    setCity(state, payload) {
      this.state.city = payload
    },
    setProvence(state, payload) {
      this.state.provence = payload
    },
    setPostalCode(state, payload) {
      this.state.postalCode = payload
    },
    setClientFirstName(state, payload) {
      this.state.clientFirstName = payload
    },
    setClientLastName(state, payload) {
      this.state.clientLastName = payload
    },
    setClientMobile(state, payload) {
      this.state.clientMobile = payload
    },
    setClientLandline(state, payload) {
      this.state.clientLandline = payload
    },
    setClientEmail(state, payload) {
      this.state.clientEmail = payload
    },
    setClientSpecialInstructions(state, payload) {
      this.state.clientSpecialInstructions = payload
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
      const database = await db.collection("users").doc(state.profileId)
      await database.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName
      })
      //commit will update the current state
      commit('setProfileInitials')
    },

    //get clients
    async getClients({ state}) {
      const database = await db.collection('clients')
      const dbResults = await database.get()
      dbResults.forEach((doc) => {
        //filter the same clients - so that the same data does not get loaded
        //will only add new data if it doesn't exist.
        if (!state.clients.some(client => client.clientId === doc.id)) {
          const data = {
            clientId: doc.data().clientId,
            companyName: doc.data().building,
            building: doc.data().building,
            officePark: doc.data().officePark,
            addressLine1: doc.data().addressLine1,
            addressLine2: doc.data().addressLine2,
            city: doc.data().city,
            provence: doc.data().provence,
            postalCode: doc.data().postalCode,
            clientFirstName: doc.data().clientFirstName,
            clientLastName: doc.data().clientLastName,
            clientMobile: doc.data().clientMobile,
            clientLandline: doc.data().clientLandline,
            clientEmail: doc.data().clientEmail,
            clientSpecialInstructions: doc.data().clientSpecialInstructions,
          }
          state.clients.push(data)
        }
      })
      console.log('CLIENTS STORE', state.clients)
      state.clientsLoaded = true
    },

  },
  modules: {
  }
})
