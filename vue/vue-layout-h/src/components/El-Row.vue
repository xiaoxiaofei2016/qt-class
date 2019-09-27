
<script>
export default {
// <template>
//  <div class="el-row">
//   <slot></slot>
//  </div>
// </template>

  render(h) {
    // h === createElement
    return h(
      this.tag,
      {},
      []
    ) 
  }
}
</script>

<style scoped>

</style>
