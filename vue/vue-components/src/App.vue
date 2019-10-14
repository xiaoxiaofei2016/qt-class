<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <i-button size="large" @click.native="handleClick"></i-button>
  </div>
</template>

<script>
import button from '@/components/common/button'
export default {
  name: 'App',
  provide() {
    return {
      app: this
    }
  },
  data () {
    return {
      user: 'wn',
      age: '18',
      sex: 'man'
    }
  },

  components: {
    'i-button': button
  },
  methods: {
    handleClick (e) {
      console.log(321)
    },
    userInfo () {
      console.log(444)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
