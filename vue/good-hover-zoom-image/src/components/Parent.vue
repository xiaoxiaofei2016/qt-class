<template>
  <div>
    <MyChild></MyChild>
  </div>
</template>

<script>
import MyChild from './Child'
export default {
  components: {
    MyChild
  },
  provide() { // 跨多个组件通信
    return {
      theme: 'red'
    }
  }
}
</script>

<style scoped>

</style>
