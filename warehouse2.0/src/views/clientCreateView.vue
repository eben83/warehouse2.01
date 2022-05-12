<template>
  <div class="client">
    <ModalView v-if="modalActive" :modal-message="modalMessage" v-on:close-modal="closeModal"></ModalView>
    <div class="container">
      <h2>Add Client</h2>
      <div class="profile-info">

        <div class="d-flex justify-content-between">
          <div class="input">
            <label for="shipmentSupplier">Company</label>
            <input type="text">
          </div>
          <div class="input">
            <label for="dateCollected">Building</label>
            <input type="text" >
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <div class="input">
            <label for="dateReceived">Office Park</label>
            <input type="text" >
          </div>
          <div class="input">
            <label for="dateCollected">Building</label>
            <input type="text" >
          </div>
        </div>



        <button class="btn btn-primary">Save Cargo</button>
      </div>
    </div>
  </div>
</template>

<script>
import ModalView from "@/components/modalView";

export default {
  name: "clientCreateView",
  components: {ModalView},
  data: () => ({}),
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

    .profile-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      padding: 32px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      //max-width: 600px;
      margin: 32px auto;

      .admin {
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
      }

      .admin-badge {
        display: flex;
        align-self: center;
        color: #ffffff;
        font-size: 14px;
        padding: 8px 24px;
        border-radius: 8px;
        background-color: #303030;
        margin: 16px 0;
        text-align: center;
        text-transform: capitalize;

        .icon {
          width: 14px;
          height: auto;
          margin-right: 8px;
        }
      }

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }

        input {
          width: 25rem;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }

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