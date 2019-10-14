<template>
  <div ref="display">
    
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      css: '',
      js: ''
    }
  }
}
</script>

<style scoped>

</style>
