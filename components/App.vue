<template>
<body ref="ngApp" v-html="angularView">
</body>
</template>
<script>

const angularView = `
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
    </footer>`

export default {
  data () {
    return {
      angularView,
      $rootScope: undefined,
    }
  },
  created () {
    require('../app.js')
    require('../app-services/product.service.js')
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