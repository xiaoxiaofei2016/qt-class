<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App1',
  data() {
    console.log('App: data (from App)') // 5
    return {
      name: 'App2'
    }
  },
  beforeMount() {
    console.log('App: beforeMount (from App)') // 2-3
  },
  mounted() {
    console.log('App: mounted (from App)') // 8
  },
  methods: {
    from() {
      return 'App3'
    }
  },
  render: h => h('h1')
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
