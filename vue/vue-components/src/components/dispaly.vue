<template>
  <div ref="display">
    
  </div>
</template>

<script>
import Vue from 'vue'
import randomStr from '../../utils/random_str'
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
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
