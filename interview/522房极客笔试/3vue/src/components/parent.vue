<template>
  <div class="parent">
    <child   v-model="showChild"/>
    {{showChild}}
    <button @click="fn">改变里面</button>
  </div>
</template>

<script>
import child from './HelloWorld.vue'
export default {
  data() {
    return {
      showChild: true
    }
  },
  // watch: {
  //   showChild(newVal, oldVal) {

  //   }
  // },
  methods: {
    fn() {
      this.showChild = false
    }
  },
  components: {
    child
  }
}
</script>

<style scoped>

</style>
