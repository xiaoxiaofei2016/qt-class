<template>
  <div class="home-hero-container container">
    <div class="home-hero">
      <div id="banner">
        <div class="img-wrap">
          <ul>
            <li class="item" style="display: block;">
              <img :src="imgs[0].imgUrl" />
            </li>
            <li class="item">
              <img :src="imgs[1].imgUrl" />
              </li>
            <li class="item">
              <img :src="imgs[2].imgUrl" />
            </li>
            <li class="item">
              <img :src="imgs[3].imgUrl" />
            </li>
            <li class="item">
              <img :src="imgs[4].imgUrl" />
            </li>
          </ul>
        </div>
        <div class="lr-tab">
          <div class="left btn"></div>
          <div class="right btn"></div>
        </div>
        <div class="tab-btn">
          <ul>
            <li class="bottom-btn active"></li>
            <li class="bottom-btn"></li>
            <li class="bottom-btn"></li>
            <li class="bottom-btn"></li>
            <li class="bottom-btn"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-hero-sub row">
      <div class="span4">
        <ul class="home-channel-list clearfix">
          <li v-for="(item, index) in miaosha" :key="index">
            <router-link to="/">
              <img :src="item.img" alt="">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="span16">
        <ul class="home-promo-list clearfix">
          <li class="first">
            <router-link to="/">
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4dad3b5b17d28764c8445129592a548.jpg?w=632&h=340" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e5a0178757a082e51e4a1d0321280ae.jpg?w=632&h=340" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340" alt="">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '@/utils/autoPlayPic.js'
export default {
  data () {
    return {
      imgs: [
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a012edbf0cf3bf3b1de22b78c19ad050.jpg?w=2452&h=920'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8569a4aa8489b7c666d097b90c2e495e.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c45b83231b290d29c4cc150deb513383.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d5f1c4b27a244efe1433a411069f35.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
        {imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b642c13442fc0ca455394f34e59a22b3.jpg?thumb=1&w=1533&h=575&f=webp&q=90'}
      ],
      miaosha: []
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/miaosha.json').then((res) => {
      this.miaosha = res.data.miaosha
      console.log(this.miaosha)
    })
  }
}
</script>

<style scoped>
.home-hero-container {
  position: relative;
  z-index: 9;
}
.home-hero {
  position: relative;
  margin-bottom: 26px;
}
#banner {
  margin: 0 auto;
  /* width: 1226px; */
  height: 460px;
  background-color: #ff6700;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.item {
  display: none;
  list-style: none;
}

.item img {
  width: 1226px;
  height: 460px;
  position: absolute;
  top: 0;
  left: 0;
}

.lr-tab .btn {
  position: absolute;
  width: 41px;
  height: 69px;
  top: 195px;
  background: url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png");
}

.lr-tab .left {
  left: 234px;
  background-position-x: -83px;
}

.lr-tab .left:hover {
  background-position-x: 0;
  cursor: pointer;
}

.lr-tab .right {
  right: 0;
  background-position: -125px 0;
}

.lr-tab .right:hover {
  background-position-x: -41px;
  cursor: pointer;
}

.tab-btn {
  position: absolute;
  width: 120px;
  height: 30px;
  right: 15px;
  bottom: 15px;
}

.bottom-btn {
  list-style: none;
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  float: left;
  margin: 5px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  transition: all .3s;
}

.bottom-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  transition: all .3s;
  cursor: pointer;
}

.active {
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  transition: all .3s;
}

.home-hero-sub {
  margin-top: 14px
}

.home-channel-list {
  margin: 0;
  padding: 3px;
  list-style-type: none;
  font-size: 12px;
  text-align: center;
  background: #5f5750;
  display: inline-block;
}

.home-channel-list li {
  position: relative;
  float: left;
  width: 70px;
  height: 82px;
  padding: 0 3px
}

.home-channel-list li:after,.home-channel-list li:before {
  position: absolute;
  content: "";
  background: #665e57
}

.home-channel-list li:before {
  top: -1px;
  left: 6px;
  width: 64px;
  height: 1px
}

.home-channel-list li:after {
  top: 6px;
  left: 0;
  width: 1px;
  height: 70px
}

.home-channel-list a {
  display: block;
  padding-top: 18px;
  text-overflow: ellipsis;
  color: #fff;
  opacity: .7;
  -webkit-transition: opacity .2s;
  transition: opacity .2s
}

.home-channel-list a:hover {
  opacity: 1
}

.home-channel-list img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto 4px
}

.home-promo-list {
  margin: 0;
  padding: 0;
  list-style-type: none
}

.home-promo-list li {
  float: left;
  width: 316px;
  height: 170px;
  margin-left: 15px;
  -webkit-transition: -webkit-box-shadow .2s linear;
  transition: -webkit-box-shadow .2s linear;
  transition: box-shadow .2s linear;
  transition: box-shadow .2s linear,-webkit-box-shadow .2s linear
}

.home-promo-list li:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
  box-shadow: 0 15px 30px rgba(0,0,0,.1)
}

.home-promo-list li.first {
  margin-left: 0
}

.home-promo-list a {
  display: block;
  height: 170px;
  background: url(https://i1.mifile.cn/f/i/2014/cn/placeholder-80.png) no-repeat 50%
}

.home-promo-list img {
  display: block;
  width: 316px;
  height: 170px
}
</style>
