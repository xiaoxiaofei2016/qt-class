<template>
  <div class="hello">
    <button @click="handleToast">购买</button>
    <!-- <Toast msg="测试弹窗1" 
    :visiable="visiable"/> -->
  </div>
</template>

<script>
// import Toast from './Toast/index'
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  components: {
    // Toast
  },
  data () {
    return {
      visiable: false
    }
  },
  methods: {
    handleToast () {
      // this.visiable = true
      // setTimeout(() => {
      //   this.visiable = false
      // },3000)
      showMessage('没到开售时间',3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
