<template>
<div>
  <toolbar></toolbar>
  <router-view></router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
import AppFooter from './AppFooter'
import Login from './login/Login'
import toolbar from './Toolbar'

export default {
  components: { toolbar,AppFooter,Login }
}

  Login
</script>

<style>

</style>


