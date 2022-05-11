<template>
  <header>
    <nav>
      <div class="branding">
        <router-link class="header" :to="{name: 'home'}" >Warehouse Link</router-link>
      </div>

      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" to="/" >Home</router-link>
          <router-link class="link" to="/" >Clients</router-link>
          <router-link class="link" to="/" >Containers</router-link>
        </ul>
      </div>
    </nav>
    <font-awesome-icon @click="toggleMobileNav" class="menu-icon" icon="fa-solid fa-bars" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" to="/" >Home</router-link>
        <router-link class="link" to="/" >Clients</router-link>
        <router-link class="link" to="/" >Containers</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  name: "nav-bar",

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      // return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    }
  },
  created() {
    window.addEventListener("resize", this.checkScreen)
    this.checkScreen()
  }
}
</script>

<style scoped lang="scss">
header {
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    //transition: .3 color ease;

    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    padding: 25px 0;
    display: flex;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 500;
        font-size: 24px;
        color: #000000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    margin: 0;

    .link {
      padding: 15px 0;
      color: white;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-2500px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

}



</style>