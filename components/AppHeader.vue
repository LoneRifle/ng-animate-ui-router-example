<template>
<header ref="ngApp" v-html="angularView">
</header>
</template>
<script>

const angularView = `
  <uib-tabset class="nav nav-tabs">
      <uib-tab
        heading="Overview"
        ui-sref="overview">
      </uib-tab>
      <uib-tab
        heading="Products"
        ui-sref="products">
      </uib-tab>
  </uib-tabset>`

export default {
  data () {
    return {
      angularView,
      $rootScope: undefined,
    }
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