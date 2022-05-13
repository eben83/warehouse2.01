<template>
  <div class="client">
    <div>
      <b-row>
        <b-col>
          <b-card>
            <b-row class="my-3 text-left">
              <b-col>
                <h4 class="m-0">Client Home</h4>
              </b-col>
              <b-col>
                <b-col class="text-right">
                  <router-link :to="{ name: 'clientCreateView' }">
                    <b-button variant="outline-primary" size="sm" squared>
                      <font-awesome-icon icon="fa-plus" class="mr-1" />
                      Add Entry
                    </b-button>
                  </router-link>
                </b-col>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-table
                    sort-icon-left
                    striped hover
                    :items="clients"
                    :fields="clientTable.tableColumns"
                    :busy="clientTable.isLoading"
                    :per-page="clientTable.resultsPerPage"
                    :total-rows="clientRows"
                    @row-clicked="openClient"
                    :current-page="clientTable.currentPage"
                    id="cargoTable"
                >
                  <template #table-busy>
                    <div class="text-center my-2">
                      <b-spinner style="width: 3rem; height: 3rem;"></b-spinner>
                    </div>
                  </template>

                  <template #cell(actions)="row">
                    <b-row align-v="center" align-h="end">
                      <b-button @click="openClient(row.item)" size="sm" class="btn-icon">
                        <b-icon-chevron-right></b-icon-chevron-right>
                      </b-button>
                    </b-row>
                  </template>

                </b-table>
              </b-col>
            </b-row>

            <b-row align-h="center" >
              <b-pagination
                  v-model="clientTable.currentPage"
                  :total-rows="clientRows"
                  :per-page="clientTable.resultsPerPage"
                  aria-controls="cargoTable"
              ></b-pagination>
            </b-row>

          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {

  name: "clientHome",
  data: () => ({
    clientTable: {
      resultsPerPage: 10,
      currentPage: 1,
      dataSource: [],
      isLoading: false,
      tableColumns: [
        {
          label: 'ID',
          key: 'clientId',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Company Name',
          key: 'companyName',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Full Name',
          key: 'clientFirstName',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Email',
          key: 'clientEmail',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Mobile',
          key: 'clientMobile',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Landline',
          key: 'clientLandline',
          sortable: true,
          tdClass:'',
        },
        {
          label: '',
          key: 'actions',
          sortable: false,
          tdClass: ''
        },
      ]
    },

  }),
  beforeCreate() {

  },
  created() {
    this.$store.dispatch('getClients')
  },
  beforeMount() {
  },
  mounted() {

  },
  beforeUpdate() {
  },
  updated() {
  },
  methods: {
    openClient(row) {
      this.clientId = row.clientId
      this.companyName = row.companyName
      this.building = row.building
      this.officePark = row.officePark
      this.addressLine1 = row.addressLine1
      this.addressLine2 = row.addressLine2
      this.city = row.city
      this.provence = row.provence
      this.postalCode = row.postalCode
      this.clientFirstName = row.clientFirstName
      this.clientLastName = row.clientLastName
      this.clientMobile = row.clientMobile
      this.clientLandline = row.clientLandline
      this.clientEmail = row.clientEmail
      this.clientSpecialInstructions = row.clientSpecialInstructions
      console.log("ROW", row)
      this.$router.push({ name: 'clientEditView'})
    },
  },
  computed: {
    clientRows() {
      return this.clientTable.dataSource.length
    },
    clients() {
      return this.$store.state.clients
    },

    clientId: {
      get() {
        return this.$store.state.clientId
      },
      set(payload) {
        console.log('CLIENT IS PAYLOAD',payload)
        this.$store.commit('setClientId', payload)
      },
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
  .card {
    background-color: transparent;
    z-index: 0;

    .btn-icon{
      background-color: transparent;
      border: none;
      color: #18224C;
    }
    .btn-icon:hover{
      background-color: transparent;
      border: none;
      color: #707070;
    }
  }
}
</style>