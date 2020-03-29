<template>
  <div class="mi-checkout page-mian">
    <div class="container">
      <div class="checkout-detail">
        <div class="adress">
          <span class="title">收货地址</span>
          <div class="nowadress">
            <span>+</span>
            <span @click="getLocation">点击获取当前位置</span>
          </div>
          <div id="container" class="map"></div>
        </div>
        <div class="goods">
          <span class="title">商品及优惠券</span>
          <div class="goods-list">
            <div class="good-item" v-for="(item, index) in allselected" :key="index">
              <div class="item-desc good-img">
                <img :src="item.img" alt />
              </div>
              <div class="item-desc good-name">
                <span>{{item.title}}</span>
              </div>
              <div class="item-desc">
                <div>
                  <div class="item-desc good-price">{{item.price}} x {{item.num}}</div>
                  <div class="item-desc good-status"></div>
                  <div class="item-desc good-total">{{totalprice[index]}}元</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="totalprice">
          <div class="price">
            <span class="shouldpay">应付金额：</span>
            <span class="money">{{totalPrice}}</span>
            <span class="yuan">元</span>
          </div>
          <div class="handle-action">
            <div class="btn btn-primary">去结算</div>
            <div class="btn btn-return" @click="back">返回购物车</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMap from "AMap";
import { mapGetters } from 'vuex'
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 10
      });
    },
    getLocation() {
      let that = this;
      var map = new AMap.Map("container", {
        resizeEnable: true
      });
      AMap.plugin("AMap.CitySearch", function() {
        var geolocation = new AMap.CitySearch({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          buttonPosition: "RB", //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
        });
        map.addControl(geolocation);
        geolocation.getLocalCity(function(status, result) {
          console.log(status, result);
          if (status == "complete") {
            that.onComplete(result);
          } else {
            that.onError(result);
          }
        });
      });
    },

    //解析定位结果
    onComplete(data) {
      // document.getElementById('status').innerHTML='定位成功'
      var str = [];
      str.push("定位结果：" + data.position);
      str.push("定位类别：" + data.location_type);
      if (data.accuracy) {
        str.push("精度：" + data.accuracy + " 米");
      } //如为IP精确定位结果则没有精度信息
      str.push("是否经过偏移：" + (data.isConverted ? "是" : "否"));
      console.log(str);
      alert("定位成功" + str);
      // document.getElementById('result').innerHTML = str.join('<br>');
    },
    //解析定位错误信息
    onError(data) {
      console.log("定位失败");
      console.log(data.message);
      alert("定位失败" + data.message);
      // document.getElementById('status').innerHTML='定位失败'
      // document.getElementById('result').innerHTML = '失败原因排查信息:'+data.message;
    },
    back() {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(['allselected', 'totalPrice']),
    totalprice() {
      let totalprice = []
      for (let i = 0; i < this.allselected.length; i++) {
        let price1 = this.allselected[i].price.substring(0, this.allselected[i].price.indexOf('元'))
        let price2 = price1 * this.allselected[i].num
        totalprice.push(price2)
      }
      return totalprice
    }
  }
};
</script>

<style scoped lang="stylus">
.mi-checkout {
  font-size: 12px;
  background: #fff;
  color: #b0b0b0;
  position: relative;
  z-index: 2;
  background: #f5f5f5;
  padding-bottom: 50px;
  padding-top: 50px;

  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    background: #fff;

    .checkout-detail {
      position: relative;
      padding: 48px 0 0;

      .adress {
        position: relative;
        padding: 0 24px;

        .title {
          color: #333;
          font-size: 18px;
          line-height: 20px;
          display: block;
          margin-bottom: 20px;
        }

        .nowadress {
          display: inline-block;
          width: 268px;
          height: 178px;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          position: relative;
          margin-right: 17px;
          margin-bottom: 20px;
          vertical-align: top;
          text-align: center;

          span {
            margin-top: 20px;
            display: block;
            font-size: 18px;
          }
        }

        .map {
          display: inline-block;
          width: 268px;
          height: 178px;
          border: 1px solid #e0e0e0;
          position: relative;
          margin-right: 17px;
          margin-bottom: 20px;
          vertical-align: top;
        }
      }

      .goods {
        position: relative;
        padding: 0 24px;

        .title {
          color: #333;
          font-size: 18px;
          line-height: 20px;
          display: block;
          margin-bottom: 20px;
        }

        .goods-list {
          padding: 5px 0;
          border-bottom: 1px solid #e0e0e0;

          .good-item {
            position: relative;
            padding: 10px 0;

            .item-desc {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              line-height: 30px;
              color: #424242;

              .good-price {
                width: 150px;
                text-align: center;
              }

              .good-status {
                width: 100px;
                text-align: center;
              }

              .good-total {
                width: 190px;
                text-align: center;
                color: #ff6701;
              }
            }

            .good-img {
              width: 30px;
              height: 30px;
              margin: 0 10px 0 0;
              img {
                width 30px;
                height 30px;
              }
            }

            .good-name {
              width: 650px;

              span {
                color: #424242;
              }
            }
          }
        }
      }

      .totalprice {
        position: relative;
        padding: 10px 24px;

        .price {
          position: relative;
          padding-left: 126px;
          line-height: 2;
          text-align: right;
          margin: 10px 0 0;
          margin-bottom: 100px;

          .shouldpay {
            position: absolute;
            top: 0;
            left: 0;
            width: 126px;
            white-space: nowrap;
            color: #757575;
            font-size: 18px;
          }

          .yuan {
            color: #ff6700;
          }

          .money {
            font-size: 30px;
            color: #ff6700;
            line-height: 1;
          }
        }

        .handle-action {
          float: right;
          margin-bottom: 50px;

          .btn {
            float: right;
            margin-left: 30px;
            vertical-align: top;
            display: inline-block;
            width: 158px;
            height: 38px;
            padding: 0;
            border: 1px solid #b0b0b0;
            font-size: 14px;
            line-height: 38px;
            text-align: center;
            color: #b0b0b0;
            cursor: pointer;
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
          }

          .btn-primary {
            background: #ff6700;
            border-color: #ff6700;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
