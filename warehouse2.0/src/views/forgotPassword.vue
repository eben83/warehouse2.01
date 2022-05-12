<template>
  <div class="login">
    <ModalView v-if="toggleModal" :modal-message="modalMessage" v-on:close-modal="closeModal"/>
    <LoadingView v-if="loading" />
    <b-card class="card">
      <b-card-header>
        //image goes here
      </b-card-header>
      <b-card-text>
        <b-form>
          <b-row class="mb-0 px-0">
            <b-col cols="12" class="px-0">
              <label>
                <font-awesome-icon icon="fa-solid fa-at" />
                Email
              </label>
              <b-form-input v-model="email"></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mx-0 mb-0">
            <b-button @click.prevent="resetPassword" class="mt-3 primary" size="sm"  block squared>
              Reset Password
            </b-button>
            <router-link :to="{ name: 'login' }">
              <b-button class="mt-3 primary-no-border" size="sm" variant="outline-primary" block squared>
                Sign In?
              </b-button>
            </router-link>
          </b-row>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import ModalView from "@/components/modalView";
import LoadingView from "@/components/loadingView";
import firebase from "firebase/app";
import "firebase/auth"

export default {
  name: "forgetPassword",
  components: {LoadingView, ModalView},
  data: () => ({
    email: null,
    toggleModal: false,
    loading: false,
    modalMessage: ''
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
      this.toggleModal = !this.toggleModal
      this.email = null
    },
    resetPassword() {
      this.loading = true
      firebase.auth().sendPasswordResetEmail(this.email)
          .then(() => {
            this.modalMessage = "If your account is active you'll receive an email"
            this.loading = false
            this.toggleModal = true
          })
          .catch((err) => {
            this.modalMessage = err.message
            this.loading = false
            this.toggleModal = true
      })
    },
  },
  computed: {},
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  height: 100vh;
  background-image: url("../assets/login-img.jpg");
  background-position: center;

  form {
    padding: 2rem;
  }

.card {
  width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  button {
    color: #fff;
    background-color: #2c3e50;

    &:hover {
      background-color: blue;
    }

    a {
      color: #fff;
      &:hover {
        text-decoration: none;
      }
    }
}
}
</style>