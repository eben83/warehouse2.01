<template>
  <div class="client">
    <LoadingView v-if="loading"/>
    <div class="container">
      <h2>Add Client</h2>
      <div class="company-info">
        <h4>Company Details</h4>
        <b-row>
          <b-col class="input">
            <label class="text-center" for="companyName">Company Name</label>
            <input type="text" v-model="companyName">
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="building">Building</label>
            <input type="text" v-model="building">
          </b-col>
          <b-col class="input">
            <label for="officePark">Office Park</label>
            <input type="text" v-model="officePark">
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="addressLine1">Address</label>
            <input type="text" v-model="addressLine1">
          </b-col>
          <b-col class="input">
            <label for="addressLine2">Address</label>
            <input type="text" v-model="addressLine2">
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="city">City</label>
            <input type="text" v-model="city">
          </b-col>
          <b-col class="input">
            <label for="provence">Provence</label>
            <input type="text" v-model="provence">
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="postalCode">Postal Code</label>
            <input type="text" v-model="postalCode">
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h4>Client Information</h4>
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="clientFirstName">First Name</label>
            <input type="text" v-model="clientFirstName">
          </b-col>
          <b-col class="input">
            <label for="clientLastName">Last Name</label>
            <input type="text" v-model="clientLastName">
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="clientMobile">Mobile</label>
            <input type="text" v-model="clientMobile">
          </b-col>
          <b-col class="input">
            <label for="clientLandline">Landline</label>
            <input type="text" v-model="clientLandline">
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="clientEmail">Email</label>
            <input type="text" v-model="clientEmail">
          </b-col>
          <b-col class="input">
            <label for="clientSpecialInstructions">Special Instructions</label>
            <textarea type="text" v-model="clientSpecialInstructions"/>
          </b-col>
        </b-row>

        <button @click="saveClient" class="btn btn-primary">Save Client</button>
      </div>
    </div>
  </div>
</template>

<script>

import LoadingView from "@/components/loadingView";
import db from '../firebase/config'
export default {
  name: "clientCreateView",
  components: {LoadingView},
  data: () => ({
    modalActive: null,
    modalMessage: null,
    loading: false,
  }),
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  destroyed() {
    this.$store.state.clientId = null
    this.$store.state.companyName = null
    this.$store.state.building = null
    this.$store.state.officePark = null
    this.$store.state.addressLine1 = null
    this.$store.state.addressLine2 = null
    this.$store.state.city = null
    this.$store.state.provence = null
    this.$store.state.postalCode = null
    this.$store.state.clientFirstName = null
    this.$store.state.clientLastName = null
    this.$store.state.clientMobile = null
    this.$store.state.clientLandline = null
    this.$store.state.clientEmail = null
    this.$store.state.clientSpecialInstructions = null
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive
    },
    async saveClient() {
      this.loading = true

      const database = db.collection('clients').doc()
      await database.set({
        clientId: database.id,
        companyName: this.companyName,
        building: this.building,
        officePark: this.officePark,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        city: this.city,
        provence: this.provence,
        postalCode: this.postalCode,
        clientFirstName: this.clientFirstName,
        clientLastName: this.clientLastName,
        clientMobile: this.clientMobile,
        clientLandline: this.clientLandline,
        clientEmail: this.clientEmail,
        clientSpecialInstructions: this.clientSpecialInstructions,
      })
      console.log('POST', this.postalCode)
      this.loading = false
      await this.$router.push({ name: "clientHome"})
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId

    },

    companyName: {
      get() {
        return this.$store.state.companyName
      },
      set(payload) {
        this.$store.commit('setCompanyName', payload)
      },
    },
    building: {
      get() {
        return this.$store.state.building
      },
      set(payload) {
        this.$store.commit('setBuilding', payload)
      },
    },
    officePark: {
      get() {
        return this.$store.state.officePark
      },
      set(payload) {
        this.$store.commit('setOfficePark', payload)
      },
    },

    addressLine1: {
      get() {
        return this.$store.state.addressLine1
      },
      set(payload) {
        this.$store.commit('setAddressLine1', payload)
      },
    },

    addressLine2: {
      get() {
        return this.$store.state.addressLine2
      },
      set(payload) {
        this.$store.commit('setAddressLine2', payload)
      },
    },

    city: {
      get() {
        return this.$store.state.city
      },
      set(payload) {
        this.$store.commit('setCity', payload)
      },
    },

    provence: {
      get() {
        return this.$store.state.provence
      },
      set(payload) {
        this.$store.commit('setProvence', payload)
      },
    },

    postalCode: {
      get() {
        return this.$store.state.postalCode
      },
      set(payload) {
        this.$store.commit('setPostalCode', payload)
      },
    },

    clientFirstName: {
      get() {
        return this.$store.state.clientFirstName
      },
      set(payload) {
        this.$store.commit('setClientFirstName', payload)
      },
    },

    clientLastName: {
      get() {
        return this.$store.state.clientLastName
      },
      set(payload) {
        this.$store.commit('setClientLastName', payload)
      },
    },

    clientMobile: {
      get() {
        return this.$store.state.clientMobile
      },
      set(payload) {
        this.$store.commit('setClientMobile', payload)
      },
    },

    clientLandline: {
      get() {
        return this.$store.state.clientLandline
      },
      set(payload) {
        this.$store.commit('setClientLandline', payload)
      },
    },

    clientEmail: {
      get() {
        return this.$store.state.clientEmail
      },
      set(payload) {
        this.$store.commit('setClientEmail', payload)
      },
    },

    clientSpecialInstructions: {
      get() {
        return this.$store.state.clientSpecialInstructions
      },
      set(payload) {
        this.$store.commit('setClientSpecialInstructions', payload)
      },
    },
  },
}
</script>

<style scoped lang="scss">
.client {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .company-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      padding: 32px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      margin: 32px auto;

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }

        input, textarea {
          width: 25rem;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }

      }

      button {
        align-self: center;
      }
    }
  }
}
</style>