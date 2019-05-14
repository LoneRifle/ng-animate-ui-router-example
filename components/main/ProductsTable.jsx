import React, { Component } from 'react'
import router from '../uirouter.jsx'

class ProductsTable extends Component {
  constructor (props) {
    super(props)
    require('../../products/main.controller.js')
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
    <div
      ref={c => this.container = c}
      dangerouslySetInnerHTML={{__html: `
      
      <a ui-sref="products.add" class="btn btn-default">Add Product</a>
      <table class="table products-table">
          <tr>
              <th>Name</th>
              <th>Price</th>
              <th class="delete-column"></th>
          </tr>
          <tr ng-repeat="product in vm.products">
              <td><a ui-sref="products.edit({ id: product.id })">{{product.name}}</a></td>
              <td>\${{product.price}}</td>
              <td><a ng-click="vm.deleteProduct(product.id)" class="btn btn-xs btn-danger">Delete</a></td>
          </tr>
      </table>

      `}}
      />
    )
  }
}

export default ProductsTable
