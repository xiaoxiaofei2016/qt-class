<template>
  <div id="app">
    <div class="hello" @click="gotoTwo">你好</div>
    <img :src="image" alt="" width="200px" height="200px">
    <router-link to="/one">去one页面</router-link>
    <router-view/>
  </div>
</template>

<script>
const image = require('./assest/timg (2).jpg')
export default {

  name: 'app',
  data() {
    return {
      image,
    }
  },
  methods: {
    gotoTwo() {
      this.$router.push({path: '/two'})
    }
  }
}
</script>

<style scoped lang="less">
#app {
  color: blue;
  .hello {
    font-size: 20px;
    color: red;
  }
}
</style>