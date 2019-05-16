<template>
<main ref="ngApp" ui-view></main>
</template>
<script>

export default {
  data () {
    return {
      $rootScope: undefined,
    }
  },
  created () {
    require('../overview/main.controller.js')
    require('../products/main.controller.js')
    require('../products/add-edit.controller.js')
  },
  mounted () {
    this.$rootScope = angular.injector(['ng', 'app']).get('$rootScope')
    angular.bootstrap(this.$refs.ngApp, ['app'])
  },
  beforeDestroy () {
    this.$rootScope.destroy()
  }
}

</script>