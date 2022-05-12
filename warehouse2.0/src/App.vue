<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //display: flex;
  box-sizing: border-box;
  min-height: 100vh;
  overflow-x: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #ffffff;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

</style>

<script>
import firebase from "firebase/app";
import "firebase/auth"

export default {
  created() {
    //this is watches for user state changes and then fires off
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit('updateUser', user)
      if (user) {
        this.$store.dispatch('getCurrentUser')
        console.log('CURRENT', this.$store.state.profileEmail)
      }
    })
  }
}
</script>