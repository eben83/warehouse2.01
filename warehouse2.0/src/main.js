import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import {faBars} from "@fortawesome/free-solid-svg-icons";

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
    faBars
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

    new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
