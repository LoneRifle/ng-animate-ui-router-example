require('angular')
require('angular-animate')
require('angular-ui-router')

require('angular-ui-bootstrap')

require('./app.js')
require('./app-services/product.service.js')

const EventEmitter = require('events')
window.events = new EventEmitter()

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import router from './components/router'

Vue.use(VueRouter)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
