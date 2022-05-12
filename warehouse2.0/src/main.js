import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import {faAt, faBars, faSignOut, faTools, faUser, faUserSecret} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase/app";
import "firebase/auth"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.filter('dateFilter', function (value) {
    if (!value) return ''
    let localeValue = new Date(value)
    return localeValue.toLocaleDateString("en-GB")
})

library.add(
    faBars, faAt, faUserSecret, faUser, faTools, faSignOut
)
Vue.component('font-awesome-icon', FontAwesomeIcon)


//this will keep the browser and firebase in sync even when the page is refreshed.
let app;
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})

