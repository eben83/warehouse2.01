<template>
  <header>
    <nav>
      <div class="branding">
        <router-link class="header" :to="{name: 'home'}" >Warehouse Report</router-link>
      </div>

      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{name: 'home'}" >Home</router-link>
          <router-link class="link" :to="{name: 'home'}" >Clients</router-link>
          <router-link class="link" :to="{name: 'home'}" >Containers</router-link>
        </ul>
        <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileShow" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>{{ this.$store.state.profileFirstName }} {{ this.$store.state.profileLastName }}</p>
                <p>{{ this.$store.state.profileUserName }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link :to="{ name: 'profile'}" class="option">
                  <font-awesome-icon class="icon" icon="fa-solid fa-user" />
                  <p>Profile</p>
                </router-link>
              </div>
              <div v-if="admin" class="option">
                <router-link :to="{ name: 'register'}" class="option">
                  <font-awesome-icon class="icon" icon="fas fa-tools" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div @click="signOut" class="option">
                <font-awesome-icon class="icon" icon="fas fa-sign-out" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <font-awesome-icon @click="toggleMobileNav" class="menu-icon" icon="fa-solid fa-bars" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{name: 'home'}" >Home</router-link>
        <router-link class="link" :to="{name: 'home'}" >Clients</router-link>
        <router-link class="link" :to="{name: 'home'}" >Containers</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth"

export default {
  name: "nav-bar",

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      profileShow: false,
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
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileShow = !this.profileShow
      }
    },

    signOut() {
      firebase.auth().signOut()
      this.$router.push('/')
      window.location.reload()
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen)
    this.checkScreen()
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    admin() {
      return this.$store.state.profileAdmin
    },
  },
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
    width: 100%;

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

      .profile {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #ffffff;
        background-color: #303030;

        //this basically hides the span
        span {
          pointer-events: none;
        }

        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #303030;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          z-index: 10;

          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid  #ffffff;

            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #ffffff;
              color: #303030;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
            .right {
              flex: 1;
              margin-left: 24px;

              p:nth-child(1) {
                font-size: 14px;
              }
              p:nth-child(2),
              p:nth-child(3)  {
                font-size: 12px;
              }
            }
          }

          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: #ffffff;
              display: flex;
              align-items: center;
              margin-bottom: 12px;

              .icon {
                width: 18px;
                height:auto;
              }

              p {
                font-size: 14px;
                margin-left: 12px;
                margin-bottom: 0;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 90px;
    height: 30px;
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
    z-index: 10;

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