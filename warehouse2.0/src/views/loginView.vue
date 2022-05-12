<template>
  <div class="login">
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
            <b-col cols="12" class="px-0 mt-2">
              <label>
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                Password
              </label>
              <b-form-input type="password" v-model="password"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div v-show="error" class="error">{{this.errorMsg}}</div>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mx-0 mb-0">
            <b-col>
              <b-button @click="signIn" class="mt-3 btn btn-primary">
                Login
              </b-button>
            </b-col>
            <b-col>
              <b-button class="mt-3">
                <router-link :to="{ name: 'forgotPassword' }">
                  Forgot Password?
                </router-link>
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth"

export default {
  name: "loginView",
  data: () => ({
    email: null,
    password: null,
    loading: false,
    error: null,
    errorMsg: ''
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
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({name: 'home'})
            // console.log(firebase.auth().currentUser.uid)
            this.error = false
            this.errorMsg = ''
          })
          .catch((err) => {
            this.error = true
            this.errorMsg = err.message
      })
    },
  },
  computed: {},
}
</script>

<style scoped lang="scss">
.login {
  background-image: url("../assets/login-img.jpg");
  background-position: center;
  position: relative;
  height: 100vh;

  form {
    padding: 2rem;
  }

  .card {
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