<template>
<body>
  <!-- header -->
  <app-header/>

  <!-- main -->
  <app-main/>

  <!-- footer -->
  <footer>
      <p>
          <a href="http://jasonwatmore.com/post/2016/01/20/Angular-ngAnimate-Tutorial-with-UI-Router.aspx">Angular ngAnimate Tutorial with UI Router</a>
      </p>
      <p>
          <a href="http://jasonwatmore.com">JasonWatmore.com</a>
      </p>
  </footer>`
</body>
</template>
<script>
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue'

export default {
  components: { AppHeader, AppMain },
}

</script>