<template>
  <div class="register">
    <LoadingView v-if="loading"/>
    <b-card class="card">
      <b-card-text>
        <b-form>
          <b-row class="mb-0 px-0">
            <b-col cols="12" class="px-0">
              <label>
                <font-awesome-icon icon="fa-solid fa-at" />
                First Name
              </label>
              <b-form-input v-model="firstName"></b-form-input>
            </b-col>
            <b-col cols="12" class="px-0">
              <label>
                <font-awesome-icon icon="fa-solid fa-at" />
                Last Name
              </label>
              <b-form-input v-model="lastName"></b-form-input>
            </b-col>
            <b-col cols="12" class="px-0">
              <label>
                <font-awesome-icon icon="fa-solid fa-at" />
                UserName
              </label>
              <b-form-input v-model="userName"></b-form-input>
            </b-col>
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
          <b-row align-h="center" class="mx-0 mb-0">
            <b-col>
              <b-button @click.prevent="register" class="mt-3 btn btn-primary">
                Create
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
import db from '../firebase/config'
import LoadingView from "@/components/loadingView";
export default {
  name: "registerView",
  components: {LoadingView},
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
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
  methods: {
    async register() {
      this.loading = true

      const firebaseAuth = await firebase.auth()
      //this creates the user login and saves it to the login
      const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
      //create user gets a response that we add it to result
      const result = await createUser
      //this then saves to collection user, if its not there it will create the user collection
      const database = db.collection("users").doc(result.user.uid)

      await database.set({
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email
      })
      this.loading = false
      await this.$router.push({name: 'home'})
    },
  },
  computed: {},
}
</script>

<style scoped lang="scss">
.register {
  position: relative;
  height: 100vh;

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