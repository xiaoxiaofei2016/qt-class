<script>
export default {
  props:{
    tag:{
      type:String,
      default:'div'
    },
    span:{
      type:Number
    },
    offset:{
      type:Number
    }
  },
  render(h) {
    let parent = this.$parent;
    let jiange = parent.jiange;
    console.log(parent, jiange)
    return h(
      this.tag,
      {
        class:['el-col',`el-col-span-${this.span}`,`el-col-offset-${this.offset}`]
      },
      // children
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
@for $i from 0 through 24 {
  .el-col-span-#{$i}{
    flex: 0 0 (1/24 * $i * 100) *1%;
    background-color: rgb(255, 255, 255);
  }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
    background-color: rgb(255, 255, 255);
  }
}
</style>