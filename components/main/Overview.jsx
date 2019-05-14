import React, { Component } from 'react'

class Overview extends Component {
  constructor (props) {
    super(props)
    require('../../overview/main.controller.js')
  }

  componentDidMount () {
    this.$rootScope = angular.injector(['ng', 'app']).get('$rootScope')
    const $injector = angular.bootstrap(this.container, ['app']);
  }

  componentWillUnmount () {
    this.$rootScope.$destroy()
  }

  render () {
    return (
    <div
      ref={c => this.container = c}
      dangerouslySetInnerHTML={{__html: `
      
      <h1>Overview</h1>
      <p>ngAnimate (1.4.8) transition example with UI-Router</p>

      `}}
      />
    )
  }
}

export default Overview
