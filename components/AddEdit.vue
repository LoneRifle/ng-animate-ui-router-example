<template>
  <div class="view-side-form">
    <div 
      ref="ngApp"
      class="side-form"
      ng-controller="Products.AddEditController"
      v-html="angularView"
      />
  </div>
</template>
<script>
const angularView = `
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
`
export default {
  data () {
    return {
      angularView,
      $rootScope: undefined,
    }
  },
  created () {
    if (this.$route.params) {
      const $stateParams = angular.injector(['ng', 'app']).get('$stateParams')
      $stateParams.id = this.$route.params.id
    }
    require('../products/add-edit.controller.js')
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