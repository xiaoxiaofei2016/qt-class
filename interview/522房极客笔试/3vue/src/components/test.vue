<template>
  <div class="table">
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>序号</th>
        <th>type</th>
      </tr>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{item.index}}</td>
        <td>{{item.type}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      axios('xxx.xx.xx.x/get_detail').then(res => {
        this.tableData = JSON.parse(JSON.stringify(rea.data))
      })
    }
  },
  
}
</script>

<style scoped>

</style>
