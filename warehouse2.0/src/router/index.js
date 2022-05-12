import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from "@/views/loginView";
import forgotPassword from "@/views/forgotPassword";
import layoutView from "@/views/layoutView";
import RegisterView from "@/views/registerView";
import ProfileView from "@/views/profileView";
import ShipmentCreateView from "@/views/shipmentCreateView";
import ClientCreateView from "@/views/clientCreateView";
import ClientHome from "@/views/clientHome";

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
        name: 'shipmentCreate',
        component: ShipmentCreateView,
        meta: {
          title: "Add Shipment"
        },
      },
      {
        path: '/add',
        name: 'clientCreateView',
        component: ClientCreateView,
        meta: {
          title: "Add Client"
        },
      },
      {
        path: '/client',
        name: 'clientHome',
        component: ClientHome,
        meta: {
          title: "Client"
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
