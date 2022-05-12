<template>
  <div class="register">
    <LoadingView v-if="loading"/>
    <ModalView v-if="modalActive" :modal-message="modalMessage" v-on:close-modal="closeModal"></ModalView>
    <div class="container">
      <h2>Register User</h2>
      <div class="profile-info">
<!--        <div class="initials"> {{ this.$store.state.profileInitials }}</div>-->
<!--        <div class="admin-badge">-->
<!--          <font-awesome-icon class="icon" icon="fas fa-tools" />-->
<!--          <span>admin</span>-->
<!--        </div>-->
        <div class="input">
          <label for="firstName">First Name</label>
          <input type="text" v-model="firstName">
        </div>
        <div class="input">
          <label for="lastName">Last Name</label>
          <input type="text" v-model="lastName">
        </div>
        <div class="input">
          <label for="userName">User Name</label>
          <input type="text" v-model="userName">
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input type="text" v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" v-model="password">
        </div>
        <button @click.prevent="register" class="btn btn-primary">Add User</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth"
import db from '../firebase/config'
import LoadingView from "@/components/loadingView";
import ModalView from "@/components/modalView";
export default {
  name: "registerView",
  components: {ModalView, LoadingView},
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
    admin: false,
    loading: false,
    modalActive: false,
    modalMessage: 'There was an Error',
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
    //TODO- check that the user doesn't get redirected to the the new profile
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
    closeModal() {
      this.modalActive = !this.modalActive
    },
  },
  computed: {},
}
</script>

<style scoped lang="scss">
.register {
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
      max-width: 600px;
      margin: 32px auto;

      .initials {
        position: initial;
        width: 80px;
        height: 80px;
        font-size: 32px;
        background-color: #303030;
        color: #ffffff;
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
        border-radius: 50%;
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
          width: 100%;
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