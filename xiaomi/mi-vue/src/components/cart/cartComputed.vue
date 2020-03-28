<template>
  <div :class="{'hide': !cart.length}">
    <div class="addonitems-tips">小米（不含小米有品）发货商品满150元免运费,还需
      <span>26
        <span>
          元
          <router-link to="">去凑单 ></router-link>
        </span>
      </span>
    </div>
    <div class="cart-goods-list">
      <div class="list-head clearfix">
        <div class="col col-check">
          <i class="iconfont icon-checkbox" @click="allselect(userId)" :class="{'icon-checkbox-selected': allcheked}">√</i>
          全选
        </div>
        <div class="col col-img">&nbsp;</div>
        <div class="col col-name">商品名称</div>
        <div class="col col-price">单价</div>
        <div class="col col-num">数量</div>
        <div class="col col-total">小计</div>
        <div class="col col-action">操作</div>
      </div>
      <div class="list-body">
        <div class="item-box" v-for="(item, index) in cart" :key="index">
          <div class="item-table">
            <div class="item-row clearfix">
              <div class="col col-check">
                <i class="iconfont icon-checkbox" @click="singleselected(item.id, userId)" :class="{'icon-checkbox-selected': item.checked == 1}">√</i>
              </div>
              <div class="col col-img">
                <router-link to="">
                  <img :src="item.img" alt="" width="80" height="80">
                </router-link>
              </div>
              <div class="col col-name">
                <div class="tags"></div>
                <div class="tags"></div>
                <h3 class="name">
                  <router-link to="">{{item.title}}</router-link>
                </h3>
              </div>
              <div class="col col-price">
                {{item.price}}
                <p class="pre-info"></p>
              </div>
              <div class="col col-num">
                <div class="change-goods-num clearfix">
                  <router-link to="" @click.native="add(item.id, userId)" :data-index="item.id">
                    <i class="iconfont">+</i>
                  </router-link>
                  <input type="text" :value="item.num" autocomplete="off" class="goods-num"/>
                  <router-link to="" @click.native="reduce(item.id, userId)">
                    <i class="iconfont">-</i>
                  </router-link>
                </div>
              </div>
              <div class="col col-total">
                {{littletotalPrice[index]}}元
                <p class="pre-info"></p>
              </div>
              <div class="col col-action">
                <router-link to="" class="del" @click.native="deletecart(item.id, userId)">
                  <i class="iconfont icon-icons-btn-cancel"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="raise-buy-box"></div>
    <div class="cart-bar clearfix" ref="cartBar" :class="{'cart-bar-fixed': isFixed}">
      <div class="section-left">
        <router-link class="back-shopping" to="">继续购物</router-link>
        <span class="cart-total" :class="{'hide': !cart.length}">
          共
          <i>{{totalnum}}</i>
          件商品,已选择
          <i>{{selectednum}}</i>
          件
        </span>
        <span class="cart-coudan hide">
          还需
          <i></i>
          元即可免邮费
          <router-link to="">立即凑单</router-link>
        </span>
      </div>
      <div class="activity-money hide">
        活动优惠: 减
        <i>0</i>
        元
      </div>
      <span class="total-price">
        合计:
        <em>{{totalPrice}}</em>
        元
      </span>
      <router-link class="btn btn-a btn-primary" to="">去结算</router-link>
      <div class="no-select-tip hide">
        请勾选需要结算的商品
        <i class="arrow arrow-a"></i>
        <i class="arrow arrow-b"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data () {
    return {
      isFixed: false,
      top: '',
      screenHeight: window.innerHeight,
      singleselect: -1,
      num: 1,
      allcheked: false,
      userInfo: {
        userId: ''
      }
    }
  },
  created() {
    if (this.loginStatus == true) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      console.log(this.cart, 'this.cart')
    }
  },
  mounted() {
    this.$store.dispatch('getcart', this.userInfo.userId)
  },
  methods: {
    deletecart (id, userId) { // 删除购物车的商品
      this.$store.dispatch('deletecart', {id, userId})
    },
    // isFixed1 () {
    //   this.top = this.$refs.cartBar.getBoundingClientRect().bottom
    //   this.screenHeight = window.innerHeight
    //   this.isFixed =  this.screenHeight - this.top
    // },
    add (id, userId) { // 增加商品数量
      this.$store.dispatch('addcartnum', {id, userId})
    },
    reduce (id, userId) { // 减少商品数量
      this.$store.dispatch('reducecartnum', {id, userId})
    },
    allselect (userId) { // 全选
     if (this.allcheked) {
       this.$store.dispatch('allfalse', userId)
     } else {
       this.$store.dispatch('alltrue', userId)
     }
    },
    singleselected (id, userId) { // 单选
      this.$store.dispatch('singleselect', {id, userId})
    }
  },
  computed: {
    ...mapGetters([
      'cart', 'littletotalPrice', 'totalnum', 'totalPrice', 'selectednum', 'loginStatus'
    ]),
    userId() {
      return this.userInfo.userId
    }
  },
  watch: {
    cart: {
      handler(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          console.log(newValue[i].checked)
          if (newValue[i].checked == 0) {
            this.allcheked = false
            return 
          }
          this.allcheked = true
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
@import "../../style/css/cart.css";
</style>
