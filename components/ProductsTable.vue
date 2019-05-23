<template>
  <div 
    ref="ngApp"
    ng-controller="Products.MainController"
    v-html="angularView"
    />
</template>
<script>
const angularView = `
<a ui-sref="products.add" class="btn btn-default">Add Product</a>
<table class="table products-table">
    <tr>
        <th>Name</th>
        <th>Price</th>
        <th class="delete-column"></th>
    </tr>
    <tr ng-repeat="product in list.products">
        <td><a ui-sref="products.edit({ id: product.id })">{{product.name}}</a></td>
        <td>\${{product.price}}</td>
        <td><a ng-click="list.deleteProduct(product.id)" class="btn btn-xs btn-danger">Delete</a></td>
    </tr>
</table>
`
export default {
  data () {
    return {
      angularView,
      $rootScope: undefined,
    }
  },
  created () {
    require('../products/main.controller.js')
  },
  mounted () {
    this.$rootScope = angular.injector(['ng', 'app']).get('$rootScope')
    const $injector = angular.bootstrap(this.$refs.ngApp, ['app'])
    const $state = $injector.get('$state')
    $state.go = (state, params) => {
      this.$router.push(params ? { name: state, params } : { name: state })
    }
  },
  beforeDestroy () {
    this.$rootScope.$destroy()
  }
}

</script>