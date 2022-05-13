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

.row{
  padding: 0;
  margin: 0 0 0.25rem;
}

.card{
  border: none;
  border-radius: 12px;
}

.table th, .table td{
  border-top: none;
}

.table {
  border-bottom: 2px solid #dee2e6;
}

th{
  color: #707070;
}
.menu-card-outline{
  border: var(--supporting-teal) solid 2px;
  h3{
    color: var(--supporting-teal);
  }
}
.menu-card-outline:hover{
  background-color: var(--supporting-teal);
  h3{
    color: white;
  }
}
h4{
  font-size: 1rem;
  font-weight: 700;
}

.btn-icon{
  background-color: transparent;
  border: none;
  color: var(--text-primary);
}
.btn-icon:hover{
  background-color: transparent;
  border: none;
  color: var(--text-primary);
}

td .row{
  margin-bottom: 0;
}

.img-to-fit{
  width: 100%;
}

.primary-background{
  background-color: var(--background-primary);
}

h5{
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0;
}

</style>

<script>
import firebase from "firebase/app";
import "firebase/auth"

export default {
  created() {
    // this is watches for user state changes and then fires off
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit('updateUser', user)
      if (user) {
        this.$store.dispatch('getCurrentUser')
        console.log('CURRENT', this.$store.state)
      }
    })
  }
}
</script>