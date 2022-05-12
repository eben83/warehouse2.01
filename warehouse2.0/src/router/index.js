import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from "@/views/loginView";
import forgotPassword from "@/views/forgotPassword";
import layoutView from "@/views/layoutView";
import RegisterView from "@/views/registerView";
import ProfileView from "@/views/profileView";
import ShipmentAddView from "@/views/shipmentAddView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginView,
    meta: {
      title: "Login"
    },
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: forgotPassword,
    meta: {
      title: "Forgot Password"
    },
  },
  {
    path: '/',
    name: 'layout',
    component: layoutView,
    children : [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: {
          title: "Home"
        },
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: {
          title: "Register User"
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: {
          title: "Profile"
        },
      },
      {
        path: '/shipment',
        name: 'shipmentAddView',
        component: ShipmentAddView,
        meta: {
          title: "Add Shipment"
        },
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Warehouse`
  next()
})

export default router
