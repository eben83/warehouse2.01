<template>
  <div class="register">
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
              <b-form-input v-model="UserName"></b-form-input>
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
              <b-button class="mt-3 btn btn-primary">
                <b-spinner small></b-spinner>
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
export default {
  name: "registerView",
  data: () => ({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    userName: null,
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
  methods: {},
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