import React, { Component } from 'react'
import router from './uirouter.jsx'

class HeaderController extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.$rootScope = angular.injector(['ng', 'app']).get('$rootScope')
    const $injector = angular.bootstrap(this.container, ['app']);
    const $state = $injector.get('$state')
    $state.go = (state, params) => {
      router.stateService.go(state, params)
    }
  }

  componentWillUnmount () {
    this.$rootScope.$destroy()
  }

  render () {
    return (
    <header
      ref={c => this.container = c}
      dangerouslySetInnerHTML={{__html: `
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
      `}}
      />
    )
  }
}

export default HeaderController
