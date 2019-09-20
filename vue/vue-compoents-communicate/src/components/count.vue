<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <!-- 取仓库里的数据 -->
    <button @click="add(5)">+</button>
    <!-- 取用仓库里的方法 -->
    <button @click="$store.commit('reduce')">-</button>
    <hr/>
    <p>{{date}}</p>
    <hr/>
    <p>{{money}}</p>
    <button @click="makeMoneyAction">挣钱</button>
  </div>
</template>

<script>
import store from '@/store/index.js'
import { mapState, mapMutations, mapGetters, mapActions } from  'vuex' // mapState,mapMutations是vuex自带的
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  // computed: {
  //   date () {
  //     return this.$store.state.date
  //   }
  // },

  computed: {
    ...mapState(['date', 'money']), // 解构
    ...mapGetters(['count']) //把gettters方法直接拿页面上用
    // count () {
    //   return this.$store.getters.count
    // }
  }, // date直接放页面上用

  // computed: mapState({
  //   date: state => state.date
  // }),
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['makeMoneyAction'])
  },
  store
}
</script>

<style scoped>

</style>
