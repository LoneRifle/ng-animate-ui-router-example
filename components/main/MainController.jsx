import React, { Component } from 'react'

class MainController extends Component {
  constructor (props) {
    super(props)
    require('../../overview/main.controller.js')
    require('../../products/main.controller.js')
    require('../../products/add-edit.controller.js')
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
      
      <!-- main -->
      <main ui-view></main>

      `}}
      />
    )
  }
}

export default MainController
