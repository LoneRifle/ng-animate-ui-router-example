import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)

import App from './components/App.vue'
import router from './components/router'
import store from './components/store'

const EventEmitter = require('events')
window.events = new EventEmitter()

require('angular')
require('angular-animate')
require('angular-ui-router')

require('angular-ui-bootstrap')

require('./app.js')
require('./app-services/product.service.js')

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
