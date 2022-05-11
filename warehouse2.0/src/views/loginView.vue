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
              <label>Username</label>
              <b-form-input></b-form-input>
            </b-col>
            <b-col cols="12" class="px-0 mt-2">
              <label>Password</label>
              <b-form-input type="password"></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mx-0 mb-0">
            <b-button class="mt-3 primary" size="sm"  block squared>
              <b-spinner small></b-spinner>
              Login
            </b-button>
          </b-row>
          <b-row class="mx-0">
            <b-button class="mt-3 primary-no-border" size="sm" variant="outline-primary" block squared>
              Forgot Password?
            </b-button>
          </b-row>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "loginView",
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

  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>