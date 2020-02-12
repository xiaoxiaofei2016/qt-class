<template>
  <div class="home-brick-box home-brick-row-2-box xm-plain-box">
    <div class="box-hd clearfix" v-if="titleId.length">
      <h2 class="title">{{titleId[0].Ltitle}}</h2>
      <div class="more">
        <ul class="tab-list">
          <li :class="{'tab-active': index == isShowBottom}" @mouseenter="ChangeTab(index)" @mouseleave="LeaveTab(index)" v-for="(item, index) in titleId[0].tab" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="box-bd">
      <div class="row">
        <!-- 前面两张不会随目录改变的图片 -->
        <div class="span4">
          <ul class="brick-promo-list clearfix" v-if="titleId.length">
            <li class="brick-item brick-item-m" v-for="(leftimg, index) in titleId[0].leftImg" :key="index">
              <router-link to="/">
                <img :src="leftimg.imgUrl" alt=""/>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="span16">
          <!-- 目录1 -->
          <div>
            <ul class="brick-list clearfix" :class="{'hide': isShowBottom != 0}" v-if="titleId.length">
              <div v-for="(list, index) in titleId[0].a[0].centerImg" :key="index">
                <li class="brick-item brick-item-m brick-item-m-2">
                  <router-link to="">
                    <div class="figure figure-img">
                      <img :src="list.imgUrl" alt="" width="160" height="160">
                    </div>
                    <h3 class="title">
                      {{list.title}}
                    </h3>
                    <p class="desc">{{list.desc}}</p>
                    <p class="price">
                      <span class="num">{{list.newprice}}</span>
                      <del class>
                        <span class="num" v-if="list.oldprice">{{list.oldprice}}</span>
                      </del>
                    </p>
                  </router-link>
                </li>
              </div>
              <li class="brick-item brick-item-s" v-if="titleId[0].a[0].rightImg">
                  <router-link to="">
                    <div class="figure figure-img">
                      <img :src="titleId[0].a[0].rightImg[0].imgUrl" alt="" width="80" height="80">
                    </div>
                    <h3 class="title">{{titleId[0].a[0].rightImg[0].title}}</h3>
                    <p class="price">
                      <span class="num">{{titleId[0].a[0].rightImg[0].newprice}}</span>
                    </p>
                  </router-link>
                </li>
              <li class="brick-item brick-item-s">
                <router-link to="">
                  <div class="figure figure-more">
                    <i class="iconfont icon-jiantou-top-copy"></i>
                  </div>
                  <div class="more">
                    浏览更多
                    <small>{{titleId[0].tab[isShowBottom]}}</small>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- 目录2 -->
          <div>
            <ul class="brick-list clearfix" :class="{'hide': isShowBottom != 1}" v-if="titleId.length">
              <div v-for="(list, index) in titleId[0].b[0].centerImg" :key="index">
                <li class="brick-item brick-item-m brick-item-m-2">
                  <router-link to="">
                    <div class="figure figure-img">
                      <img :src="list.imgUrl" alt="" width="160" height="160">
                    </div>
                    <h3 class="title">
                      {{list.title}}
                    </h3>
                    <p class="desc">{{list.desc}}</p>
                    <p class="price">
                      <span class="num">{{list.newprice}}</span>
                      <del class>
                        <span class="num" v-if="list.oldprice">{{list.oldprice}}</span>
                      </del>
                    </p>
                  </router-link>
                </li>
              </div>
              <li class="brick-item brick-item-s" v-if="titleId[0].b[0].rightImg">
                  <router-link to="">
                    <div class="figure figure-img">
                      <img :src="titleId[0].b[0].rightImg[0].imgUrl" alt="" width="80" height="80">
                    </div>
                    <h3 class="title">{{titleId[0].b[0].rightImg[0].title}}</h3>
                    <p class="price">
                      <span class="num">{{titleId[0].b[0].rightImg[0].newprice}}</span>
                    </p>
                  </router-link>
                </li>
              <li class="brick-item brick-item-s">
                <router-link to="">
                  <div class="figure figure-more">
                    <i class="iconfont icon-jiantou-top-copy"></i>
                  </div>
                  <div class="more">
                    浏览更多
                    <small>{{titleId[0].tab[isShowBottom]}}</small>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- 目录3 -->
          <div>
            <ul class="brick-list clearfix" :class="{'hide': isShowBottom != 2}" v-if="titleId.length && titleId[0].c">
              <div v-for="(list, index) in titleId[0].c[0].centerImg" :key="index">
                <li class="brick-item brick-item-m brick-item-m-2">
                  <router-link to="">
                    <div class="figure figure-img">
                      <img :src="list.imgUrl" alt="" width="160" height="160">
                    </div>
                    <h3 class="title">
                      {{list.title}}
                    </h3>
                    <p class="desc">{{list.desc}}</p>
                    <p class="price">
                      <span class="num">{{list.newprice}}</span>
                      <del class>
                        <span class="num" v-if="list.oldprice">{{list.oldprice}}</span>
                      </del>
                    </p>
                  </router-link>
                </li>
              </div>
              <li class="brick-item brick-item-s" v-if="titleId[0].c[0].rightImg">
                  <router-link to="">
                    <div class="figure figure-img">
                      <img :src="titleId[0].c[0].rightImg[0].imgUrl" alt="" width="80" height="80">
                    </div>
                    <h3 class="title">{{titleId[0].c[0].rightImg[0].title}}</h3>
                    <p class="price">
                      <span class="num">{{titleId[0].c[0].rightImg[0].newprice}}</span>
                    </p>
                  </router-link>
                </li>
              <li class="brick-item brick-item-s">
                <router-link to="">
                  <div class="figure figure-more">
                    <i class="iconfont icon-jiantou-top-copy"></i>
                  </div>
                  <div class="more">
                    浏览更多
                    <small>{{titleId[0].tab[isShowBottom]}}</small>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleId: {
      type: Array
    }
  },
  data () {
    return {
      isShowBottom: 0
    }
  },
  methods: {
    ChangeTab (index) {
      this.isShowBottom = index
      console.log(index, '目录')
    },
    LeaveTab (index) {
      this.isShowBottom = index
      console.log(index, '目录')
    }
  },
  watch: {
  },
  created () {
    console.log(this.titleId, 'titleId')
  }
}
</script>

<style scoped>
.xm-plain-box .box-hd {
  position: relative;
  height: 58px;
  -webkit-font-smoothing: antialiased
}

.xm-plain-box .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333
}

.xm-plain-box .box-hd .title small {
  margin-left: 10px;
  font-size: 14px
}

.xm-plain-box .box-hd .title .tip {
  color: #757575
}

.xm-plain-box .box-hd .more {
  position: absolute;
  top: 0;
  right: 0
}

.xm-plain-box .box-hd .more .more-link {
  font-size: 16px;
  line-height: 58px;
  color: #424242;
  -webkit-transition: all .4s;
  transition: all .4s
}

.xm-plain-box .box-hd .more .more-link:hover {
  color: #ff6700
}

.xm-plain-box .box-hd .more .more-link:hover .iconfont {
  background: #ff6700
}

.xm-plain-box .box-hd .more .more-link .iconfont {
  width: 12px;
  height: 12px;
  padding: 4px;
  margin-left: 8px;
  border-radius: 16px;
  font-size: 12px;
  line-height: 12px;
  background: #b0b0b0;
  color: #fff;
  vertical-align: 1px;
  -webkit-transition: all .4s;
  transition: all .4s
}

.xm-plain-box .box-hd .more .control {
  margin-left: -1px
}

.xm-plain-box .box-hd .more .tab-list {
  margin: 0;
  padding: 16px 0 0;
  list-style-type: none;
  font-size: 16px
}

.xm-plain-box .box-hd .more .tab-list li {
  display: inline-block;
  padding: 0;
  margin: 0 15px;
  color: #424242;
  border-bottom: 2px solid #f5f5f5;
  border-bottom: 2px solid rgba(0,0,0,0);
  -webkit-transition: border .3s;
  transition: border .3s;
  cursor: pointer;
  height: 24px;
  line-height: 22px;
}

.xm-plain-box .box-hd .more .tab-list .tab-active,.xm-plain-box .box-hd .more .tab-list li:hover {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}
.home-brick-box {
  margin-bottom: 8px
}
.home-brick-box .box-hd .more .tab-list li {
  margin: 0 0 0 30px
}
.home-brick-box .brick-list,.home-brick-box .brick-promo-list {
  margin: 0 0 -14px -14px
}
.home-brick-box .tab-content-hide {
  display: none
}
.brick-list,.brick-promo-list {
  height: 614px;
  margin: 0;
  padding: 0;
  list-style-type: none
}
.brick-list {
  width: 992px
}
.brick-promo-list a {
  display: block;
  width: 100%;
  height: 100%
}
.brick-promo-list img {
  width: 234px
}
.brick-promo-list .brick-item-l img {
  height: 614px
}
.brick-promo-list .brick-item-m {
  height: 300px;
  padding: 0
}
.brick-promo-list .brick-item-m img {
  height: 300px
}
.brick-promo-list .brick-item-s img {
  height: 143px
}
.brick-item {
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  -webkit-transition: all .2s linear;
  transition: all .2s linear
}
.brick-item:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
  box-shadow: 0 15px 30px rgba(0,0,0,.1);
  -webkit-transform: translate3d(0,-2px,0);
  transform: translate3d(0,-2px,0)
}
.brick-item-m {
  height: 246px;
  padding: 34px 0 20px
}

.brick-item-m .figure-img {
  width: 150px;
  height: 150px;
  margin: 0 auto 18px
}

.brick-item-m .figure-img a {
  display: block
}

.brick-item-m .figure-img img {
  width: 150px;
  height: 150px
}

.brick-item-m .title {
  margin: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333
}

.brick-item-m .desc,.brick-item-m .title {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden
}

.brick-item-m .desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0
}

.brick-item-m .price {
  margin: 0 10px 10px;
  text-align: center;
  color: #ff6700
}

.brick-item-m .price del {
  margin-left: .5em;
  color: #b0b0b0
}

.brick-item-m-2 {
  height: 260px;
  padding: 20px 0
}

.brick-item-m-2 .figure-img,.brick-item-m-2 .figure-img img {
  width: 160px;
  height: 160px
}

.brick-item-m-2 .title {
  margin: 0 10px 2px
}

.brick-item-m-2 .price {
  margin: 0 10px 14px
}

.brick-item-s {
  height: 93px;
  padding-top: 50px
}

.brick-item-s .figure-img {
  position: absolute;
  right: 20px;
  top: 32px;
  width: 80px;
  height: 80px
}

.brick-item-s .figure-img a {
  display: block
}

.brick-item-s .figure-img img {
  width: 80px;
  height: 80px
}

.brick-item-s .figure-more {
  position: absolute;
  right: 35px;
  top: 48px;
  width: 48px;
  height: 48px;
  color: #ff6700
}

.brick-item-s .title {
  margin: -10px 110px 5px 30px;
  font-size: 14px;
  font-weight: 400
}

.brick-item-s .title,.brick-item-s .title a {
  color: #333
}

.brick-item-s .title a {
  display: block;
  text-overflow: ellipsis
}

.brick-item-s .price {
  margin: 0 110px 0 30px;
  font-size: 12px;
  color: #ff6700
}

.brick-item-s .price .num {
  font-size: 14px
}

.brick-item-s .more {
  display: block;
  margin: 0 110px 0 30px;
  font-size: 18px;
  color: #333;
  height: 44px;
}

.brick-item-s .more small {
  display: block;
  font-size: 12px;
  color: #757575;
  margin-top: 10px;
}
.brick-item-s i {
  font-size: 48px;
  line-height: 48px
}
</style>
