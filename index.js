require('angular')
require('angular-animate')
require('angular-ui-router')

require('angular-ui-bootstrap')

require('./app.js')
require('./app-services/product.service.js')

import Vue from 'vue'
import App from './components/App.vue'
new Vue({
  el: '#app',
  render: h => h(App)
})
