<template>
  <div id="app">
    <v-topNav></v-topNav>
    <router-view/>
  </div>
</template>

<script>
import topNav from './components/topNav/topNav.vue'
export default {
  name: 'App',
  components: {
    'v-topNav': topNav
  }
}
</script>

<style>

</style>
