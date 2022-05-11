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
              <b-form-input></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mx-0 mb-0">
            <b-button class="mt-3 primary" size="sm"  block squared>
              <b-spinner small></b-spinner>
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
export default {
  name: "forgetPassword",
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
  methods: {},
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