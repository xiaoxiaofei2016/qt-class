<template>
  <div>
    {{msg}}
    {{msg2}}
    <button @click="fn">按钮</button>
    {{a}}
    <button @click="add">+</button>
    {{count}}
  </div>
</template>

<script>
export default {
  props: ['msg','msg2','fn','a','count','add'], //props里的数据不能被修改,如果父组件用v-bind绑定一个字段，子组件可以拿到字段内的子属性
  computed: {

  },
  methods: {
    // add () {

    //   // this.count++
    //   this.$emit('addCount')
    // }
  }
}
</script>

<style scoped>

</style>
