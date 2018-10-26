// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueTheMask from 'vue-the-mask'

import money from 'v-money'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueTheMask)
Vue.use(money, {precision: 4})
Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
