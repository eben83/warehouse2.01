<template>
  <div class="home">
    <nav-bar />
    <div>
      <b-row>
        <b-col>
          <b-card>
            <b-table
                sort-icon-left
                striped hover
                :items="cargoTable.dataSource"
                :fields="cargoTable.tableColumns"
                :busy="cargoTable.isLoading"
                :per-page="cargoTable.resultsPerPage"
                :total-rows="cargoRows"
                @row-clicked="openCargoEntry"
                :tbody-tr-class="rowClass"
                :current-page="cargoTable.currentPage"
                id="cargoTable"
            >
              <template #table-busy>
                <div class="text-center my-2">
                  <b-spinner style="width: 3rem; height: 3rem;"></b-spinner>
                </div>
              </template>

            </b-table>

            <b-row align-h="center" >
              <b-pagination
                  v-model="cargoTable.currentPage"
                  :total-rows="cargoRows"
                  :per-page="cargoTable.resultsPerPage"
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

import NavBar from "@/components/nav-bar";
export default {
  name: 'HomeView',
  components: {NavBar},
  data: () => ({
    cargoTable: {
      resultsPerPage: 10,
      currentPage: 1,
      dataSource: [],
      isLoading: true,
      tableColumns: [
        {
          label: 'Supplier',
          key: 'supplier',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Date Of Collection',
          key: 'dateCollected',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Date Charge Start',
          key: 'endDateOfFreeStorage',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'BPO Number',
          key: 'bpoNumber',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Container',
          key: 'container.containerNumber',
          sortable: true,
          tdClass:'',
        },
        {
          label: 'Atrax Invoice',
          key: 'atraxInvoiceNumber',
          sortable: false,
          tdClass:'',
        },
        {
          label: 'Quantity',
          key: 'quantitySum',
          sortable: false,
          tdClass:'',
        },
        {
          label: '',
          key: 'icons',
          sortable: false,
          tdClass:'',
        },
        {
          label: 'Weight (KG)',
          key: 'weightSum',
          sortable: false,
          tdClass:'',
        },
        {
          label: 'KG - CBM Conv.',
          key: 'kgCBMConversionSum',
          sortable: false,
          tdClass:'',
        },
        {
          label: 'Volume (CBM)',
          key: 'volumeSum',
          sortable: false,
          tdClass:'',
        },
        {
          label: 'Chargeable Weight',
          key: 'chargeableWeightSum',
          sortable: false,
          tdClass:'',
        },
        {
          label: 'Storage Days',
          key: 'storageDaysCalc',
          sortable: false,
          tdClass:'',
        },
        {
          label: 'Storage Cost',
          key: 'storageCostsCalc',
          sortable: false,
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
  methods: {
    openCargoEntry() {},
    //this method will update the class on the table row
    rowClass(item, type) {
      if (!item || type !== 'row') return
      if (item.hazardous === true) return 'table-danger'
    },
  },
  computed: {
    cargoRows() {
      return this.cargoTable.dataSource.length
    },
  },
}
</script>
