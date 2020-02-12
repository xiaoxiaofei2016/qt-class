<template>
  <div class="uc-box uc-sub-box">
    <div class="uc-nav-box" v-for="(item, index) in userCenter" :key="index">
      <div class="box-hd">
        <h3 class="title">{{item.title}}</h3>
      </div>
      <div class="box-bd">
        <ul class="uc-nav-list" v-if="userCenter.length">
          <li v-for="(list, index) in item.list" :key="index" :class="{'active': id == list.id}">
            <router-link to="" @click.native="difleftnav(list.stitle, list.id)">{{list.stitle}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userCenter: [],
      id: ''
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/userCenter.json').then(res => {
      this.userCenter = res.data.userCenter
    })
    this.id = this.$route.params.id
  },
  // beforeUpdate() {
  //   console.log('this.$route.params.id', this.$route.params.id)
  //   this.id = this.$route.params.id
  // },
  methods: {
    difleftnav (title, id) {
      this.$router.push({ name: `usercenter${id}`, query: { title: title }, params: { id: id }})
      this.id = id
    }
  }
}
</script>

<style scoped lang="stylus">
.uc-box
  background #fff
.uc-sub-box
  padding 36px 0
  .uc-nav-box
    margin-bottom 12px
    .box-hd
      height 52px
      .title
        margin 0 48px 2px
        font-size 16px
        font-weight 400
        line-height 52px
        color #333
    .box-bd
      .uc-nav-list
        margin 0
        padding 0
        list-style-type none
        li
          padding 6px 48px
          a
            color #757575
            &:hover
              color #424242
          &.active a
            color $hover_color
</style>
