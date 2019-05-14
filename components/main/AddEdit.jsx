import React, { Component } from 'react'
import router from '../uirouter.jsx'

class AddEdit extends Component {
  constructor (props) {
    super(props)
    require('../../products/add-edit.controller.js')
  }

  componentDidMount () {
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
    <div className="view-side-form">
      <div
        className="side-form"
        ref={c => this.container = c}
        dangerouslySetInnerHTML={{__html: `
        <div class="content">
        <h1>{{vm.title}}</h1>
        <div class="form-container">
            <form method="post">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" ng-model="vm.product.name" required />
                </div>
                <div class="form-group">
                    <label for="name">Price</label>
                    <input type="text" id="price" class="form-control" ng-model="vm.product.price" required />
                </div>
                <div class="form-group">
                    <a class="btn btn-default" ui-sref="products">Cancel</a>
                    <button class="btn btn-primary" ng-click="vm.saveProduct()">Save</button>
                </div>
            </form>
        </div>
        </div>
        <div class="background"></div>
        `}}
        />
    </div>
    )
  }
}

export default AddEdit
