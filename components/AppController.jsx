import React, { Component } from 'react'
import MainController from './main/MainController.jsx'
import HeaderController from './HeaderController.jsx'

class AppController extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div>
      <HeaderController/>
      
      <MainController/>
      
      <footer>
          <p>
              <a href="http://jasonwatmore.com/post/2016/01/20/Angular-ngAnimate-Tutorial-with-UI-Router.aspx">Angular ngAnimate Tutorial with UI Router</a>
          </p>
          <p>
              <a href="http://jasonwatmore.com">JasonWatmore.com</a>
          </p>
      </footer>
    </div>
    )
  }
}

export default AppController
