<template>
  <div class="children">
      <div v-show="visible" @click="onClick">welcome to children</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model: {
    prop: 'visible',
    event: 'cc'
  },
  data () {
    return {
      // show: true
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick() {
      this.$emit('cc', false)
    }
  },
  watch: {
    // visible(val) {
    //   this.show = val
    // },
    // show(val) {
    //   this.$emit('change', val)
    // }
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
