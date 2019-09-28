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
  provide() {
    return {
      theme: 'red'
    }
  }
}
</script>

<style scoped>

</style>
