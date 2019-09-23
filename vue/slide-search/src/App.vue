<template>
  <div>
    <SlideSearch :showSearchPage="showSearchPage"></SlideSearch>
    <ul class="main">
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
      <li>11</li>
    </ul>
  </div>
</template>

<script>
import SlideSearch from './components/SlideSearch/index'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data () {
    return {
      showSearchPage: false
    }
  },
  components: {
    HelloWorld,
    SlideSearch
  },
  // mounted已经转化为真正的 dom
  mounted: function() {
    const ul = document.querySelector('.main')
    ul.addEventListener('scroll', () => {
      if (ul.scrollTop === 0) {
        this.showSearchPage = false
      }
      if (ul.scrollTop > 10) {
        this.showSearchPage = true
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  height: calc(100vh - 94px);
  overflow: scroll;
}
li {
  margin-top: 20px;
}

</style>
