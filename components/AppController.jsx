import React, { Component } from 'react'

class AppController extends Component {
  constructor (props) {
    super(props)
    require('../app.js')
    require('../app-services/product.service.js')
    require('../overview/main.controller.js')
    require('../products/main.controller.js')
    require('../products/add-edit.controller.js')
  }

  componentDidMount() {
    this.$rootScope = angular.injector(['ng', 'app']).get('$rootScope')
    angular.bootstrap(this.container, ['app']);
  }

  componentWillUnmount () {
    this.$rootScope.$destroy()
  }

  render () {
    return (
    <div
      ref={c => this.container = c}
      dangerouslySetInnerHTML={{__html: `
      <!-- header -->
      <header>
          <uib-tabset class="nav nav-tabs">
              <uib-tab
                heading="Overview"
                ui-sref="overview">
              </uib-tab>
              <uib-tab
                heading="Products"
                ui-sref="products">
              </uib-tab>
          </uib-tabset>
      </header>
      
      <!-- main -->
      <main ui-view></main>
      
      <!-- footer -->
      <footer>
          <p>
              <a href="http://jasonwatmore.com/post/2016/01/20/Angular-ngAnimate-Tutorial-with-UI-Router.aspx">Angular ngAnimate Tutorial with UI Router</a>
          </p>
          <p>
              <a href="http://jasonwatmore.com">JasonWatmore.com</a>
          </p>
      </footer>
      `}}
      />
    )
  }
}

export default AppController
