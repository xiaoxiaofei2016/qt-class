<template>
  <div class="page-main">
    <div class="container">
      <div class="cart-loading loading hide">
        <div class="loader"></div>
      </div>
      <div class="cart-empty" :class="[{'cart-empty-nologin': !loginStatus}, {'hide': cart.length}]">
        <h2>您的购物车还是空的!</h2>
        <p class="login-desc" v-if="!loginStatus">登录后将显示您之前加入的商品</p>
        <router-link to="/Login" class="btn btn-primary btn-login" v-if="!loginStatus">立即登录</router-link>
        <router-link to="" class="btn btn-primary btn-shoping">马上去购物</router-link>
      </div>
      <v-cart></v-cart>
      <div class="cart-recommend container" :class="{'hide': cart.length}">
        <h2 class="xm-recommend-title">
          <span>为您推荐</span>
        </h2>
        <div class="xm-recommend">
          <ul class="row clearfix">
            <li class="span4" 
              @mouseenter="showBtn(item.id)" 
              @mouseleave="donotshowBtn(item.id)" 
              v-for="(item, index) in allcart" 
              :key="index">
              <dl>
                <dt>
                  <router-link to="">
                    <img :src="item.img" alt="">
                  </router-link>
                </dt>
                <dd class="xm-recommend-name">
                  <router-link to="">{{item.title}}</router-link>
                </dd>
                <dd class="xm-recommend-price">{{item.price}}</dd>
                <dd class="xm-recommend-tips">
                  {{item.recommend}}
                  <router-link to="" 
                    class="btn btn-small btn-line-primary" 
                    :style="{display: isShowBtn == item.id ? 'block': 'none'}"
                    @click.native="addcart(item.id, item.title, item.price, item.recommend, item.img, 1, 1)"
                    >加入购物车</router-link>
                </dd>
                <div class="xm-recommend-notice"></div>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="cart-recommend container" :class="{'hide': !cart.length}">
        <h2 class="xm-recommend-title">
          <span>买购物车中商品的人还买了</span>
        </h2>
        <div class="xm-recommend">
          <ul class="row clearfix">
            <!-- <li class="span4">
              <router-link to="">
                <img src="" alt="" class="xm-recommend-ad">
              </router-link>
            </li> -->
            <li class="span4" 
              @mouseenter="showBtn(item.id)" 
              @mouseleave="donotshowBtn(item.id)" 
              v-for="(item, index) in allcart" 
              :key="index">
              <dl>
                <dt>
                  <router-link to="">
                    <img :src="item.img" alt="">
                  </router-link>
                </dt>
                <dd class="xm-recommend-name">
                  <router-link to="">{{item.title}}</router-link>
                </dd>
                <dd class="xm-recommend-price">{{item.price}}</dd>
                <dd class="xm-recommend-tips">
                  {{item.recommend}}
                  <router-link to="" 
                    class="btn btn-small btn-line-primary" 
                    :style="{display: isShowBtn == item.id ? 'block': 'none'}"
                    @click.native="addcart(item.id, item.title, item.price, item.recommend, item.img, 1, 1, userId)"
                    >加入购物车</router-link>
                </dd>
                <div class="xm-recommend-notice"></div>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cartComputed from './cartComputed.vue'
export default {
  data () {
    return {
      isShowBtn: -1,
      allcart: [],
      userInfo: {
        userId: ''
      }
    }
  },
  components: {
    'v-cart': cartComputed
  },
  computed: {
    ...mapGetters([
      'loginStatus', 'cart'
    ]),
    userId() {
      return this.userInfo.userId
    }
  },
  created() {
    if (this.loginStatus == true) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  watch: { // 监听cart长度从而判断请求几条数据(10条还是20条)
    cart (newval, old) {
      // console.log(newval.length, old.length)
      if (newval.length == 0 && old.length != 0) {
        // console.log(1)
        this.requestGoods(20)
      } else {
        // console.log(4)
        this.requestGoods(10)
      }
    }
  },
  methods: {
    showBtn (id) {
      this.isShowBtn = id
    },
    donotshowBtn (id) {
      this.isShowBtn = -1
    },
    addcart (id, title, price, recommend, img, num, checked, userId) { // 点击加入购物车
      this.$store.dispatch('addcart', {id, title, price, recommend, img, num, checked, userId})
    },
    requestGoods (nums) {
      this.$http({
      url: 'http://localhost:3000/users/allcart',
      method: 'post',
      data: {
        num: nums
      }
    }).then(res => {
      this.allcart = res.data.data
    }).catch(err => {
      console.log(err)
    })
    }
  }
}
</script>

<style scoped>
@import "../../style/css/cart.css";
</style>
