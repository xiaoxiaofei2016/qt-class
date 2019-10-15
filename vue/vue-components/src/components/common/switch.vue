<template>
  <div class="switch">
    <!-- <button @click="open">开关</button> -->
    <!-- <button @click="toDo">点击</button> -->
    <child></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  data () {
    return {
      switch: false
    }
  },
  mounted() {
    this.$on('test', (text) => { // 接收子组件的this.$dispatch('test', ) 
      console.log(text)
    })
  },
  methods: {
    // open () {
    //   this.$emit('test', '666')
    // }
  },
  components: {
    child
  }
}
</script>

<style scoped>

</style>
