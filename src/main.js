import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'

import {BootstrapVue,IconsPlugin} from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/reset.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueResource)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
