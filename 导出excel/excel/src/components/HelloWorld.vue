<template>
  <div class="hello">
    <button @click="exportExcel">导出</button>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "HelloWorld",
  data() {
    return {
    };
  },
  methods: {
    // exportExcel() {
    //   require.ensure([], () => {
    //     const { export_json_to_excel } = require("vendor/Export2Excel");
    //     const tHeader = ["编号", "标题", "作者", "回顾", "时间"];
    //     const filterVal = [
    //       "id",
    //       "title",
    //       "author",
    //       "pageviews",
    //       "display_time"
    //     ];
    //     const list = [
    //       { id: 1, title: 2, author: 3, pageviews: 4, time: 5 },
    //       { id: 6, title: 7, author: 8, pageviews: 9, time: 10 },
    //       { id: 11, title: 12, author: 13, pageviews: 14, time: 15 }
    //     ]
    //     const data = this.formatJson(filterVal, list);
    //     export_json_to_excel(
    //       tHeader,
    //       data,
    //       "账单报表" + moment(new Date()).format("YYYYMMDDHHmmss")
    //     );
    //   });
    // },
    exportExcel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("vendor/Export2Excel");
        const tHeader1 = ["编号", "标题", "作者", "回顾", "时间"];
        const tHeader2 = ["学号", "科目", "成绩", "时间"];
        const filterVal1 = ["id", "title", "author", "pageviews", "display_time"];
        const filterVal2 = ["number", "type", "grade", "display_time"];
        const list1 = [
          { id: 1, title: 2, author: 3, pageviews: 4, time: 5 },
          { id: 6, title: 7, author: 8, pageviews: 9, time: 10 },
          { id: 11, title: 12, author: 13, pageviews: 14, time: 15 }
        ]
        const list2 = [
          { number: 1, type: 2, grade: 3, display_time: 5 },
          { number: 6, type: 7, grade: 8, display_time: 10 },
          { number: 11, type: 12, grade: 13, display_time: 15 }
        ]
        const data1 = this.formatJson(filterVal1, list1);
        const data2 = this.formatJson(filterVal2, list2);
        export_json_to_excel({
          th: [tHeader1, tHeader2], 
          jsonData: [data1, data2], 
          defaultTitle: '报表'+ moment(new Date()).format('YYYYMMDDHHmmss'), 
          SheetName: ['sheet1', 'sheet2']
        })
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
