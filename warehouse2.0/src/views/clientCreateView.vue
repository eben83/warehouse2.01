<template>
  <div class="client">
    <ModalView v-if="modalActive" :modal-message="modalMessage" v-on:close-modal="closeModal"></ModalView>
    <div class="container">
      <h2>Add Client</h2>
      <div class="company-info">
        <h3>Company Details</h3>
        <b-row>
          <b-col class="input">
            <label class="text-center" for="shipmentSupplier">Company Name</label>
            <input type="text">
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="dateCollected">Building</label>
            <input type="text" >
          </b-col>
          <b-col class="input">
            <label for="dateReceived">Office Park</label>
            <input type="text" >
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="dateReceived">Address</label>
            <input type="text" >
          </b-col>
          <b-col class="input">
            <label for="dateCollected">Address</label>
            <input type="text" >
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="dateReceived">City</label>
            <input type="text" >
          </b-col>
          <b-col class="input">
            <label for="dateCollected">Provence</label>
            <input type="text" >
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="dateReceived">Postal Code</label>
            <input type="text" >
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>Client Information</h2>
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="dateReceived">First Name</label>
            <input type="text" >
          </b-col>
          <b-col class="input">
            <label for="dateCollected">Last Name</label>
            <input type="text" >
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="dateReceived">Mobile</label>
            <input type="text" >
          </b-col>
          <b-col class="input">
            <label for="dateCollected">Landline</label>
            <input type="text" >
          </b-col>
        </b-row>

        <b-row >
          <b-col class="input">
            <label for="dateReceived">Email</label>
            <input type="text" >
          </b-col>
          <b-col class="input">
            <label for="dateReceived">Special Instructions</label>
            <textarea type="text" />
          </b-col>
        </b-row>

        <button class="btn btn-primary">Save Client</button>
      </div>
    </div>
  </div>
</template>

<script>
import ModalView from "@/components/modalView";

export default {
  name: "clientCreateView",
  components: {ModalView},
  data: () => ({
    modalActive: null,
    modalMessage: null,
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
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive
    },
  },
  computed: {},
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