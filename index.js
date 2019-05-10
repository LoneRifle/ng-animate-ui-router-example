require('angular')
require('angular-animate')
require('angular-ui-router')

require('angular-ui-bootstrap')

require('./app.js')
require('./app-services/product.service.js')

import React from 'react'
import ReactDOM from 'react-dom'
import AppController from './components/AppController.jsx'

ReactDOM.render(<AppController />, document.getElementById('root'));
