
<script>
export default {
  props:{
    tag:{
      type:String,
      default:'div'
    },
    jiange:{
      type:Number
    }
  },
  render(h) {
    // h === createElement
    return h(
      this.tag,
      {
        class:['el-row']
      },
      // children   <slot name="a"></slot>   slots可获取里面所有的slot
      this.$slots.default
    )
  }
}
</script>

<style scoped>
.el-row{
  width: 100%;
  display: flex;
}
</style>
