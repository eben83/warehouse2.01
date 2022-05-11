<template>
  <div>
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
                <b-form-input></b-form-input>
                <label>
                  <font-awesome-icon icon="fa-solid fa-at" />
                  Last Name
                </label>
                <b-form-input></b-form-input>
                <label>
                  <font-awesome-icon icon="fa-solid fa-at" />
                  User Name
                </label>
                <b-form-input></b-form-input>
                <label>
                  <font-awesome-icon icon="fa-solid fa-at" />
                  Email
                </label>
                <b-form-input></b-form-input>
              </b-col>
              <b-col cols="12" class="px-0 mt-2">
                <label>
                  <font-awesome-icon icon="fa-solid fa-user-secret" />
                  Password
                </label>
                <b-form-input type="password"></b-form-input>
              </b-col>
            </b-row>
            <b-row align-h="center" class="mx-0 mb-0">
              <b-col>
                <b-button class="mt-3 btn btn-primary">
                  <b-spinner small></b-spinner>
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
  </div>
</template>

<script>
export default {
  name: "registerView",
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

<style scoped>
</style>