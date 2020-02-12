<template>
  <transition name="dialog-fade">
    <div class="mi-dialog__wrapper" style="width: 880px" v-if="isShowVideo">
      <div class="mi-dialog">
        <div class="mi-dialog__header">
          <span class="mi-dialog__title">{{title[id]}}</span>
        </div>
        <router-link to="" class="mi-dialog__headerbtn" @click.native="hideMV(id)">
          <i class="mi-dialog__close iconfont icon-icons-btn-cancel"></i>
        </router-link>
        <div class="mi-dialog__body">
          <div class="mi-dialog__inner">
            <div class="mi-video-player">
              <div class="mi-video-wrapper">
                <div class="mi-video-box">
                  <video-player  class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @ended="onPlayerEnded($event)"
                    @loadeddata="onPlayerLoadeddata($event)"
                    @waiting="onPlayerWaiting($event)"
                    @playing="onPlayerPlaying($event)"
                    @timeupdate="onPlayerTimeupdate($event)"
                    @canplay="onPlayerCanplay($event)"
                    @canplaythrough="onPlayerCanplaythrough($event)"
                    @ready="playerReadied"
                    @statechanged="playerStateChanged($event)"
                    >
                  </video-player>
                </div>
                <!-- <div class="mi-video-loading">
                  <img src alt="正在加载..." />
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    'video-player': videoPlayer
  },
  data () {
    return {
      // id: 3,
      url: '',
      // videojs options
      playerOptions: { // video的配置
        autoplay: false,
        controls: true,
        muted: false,
        language: 'en',
        height: '495',
        width: '880',
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        sources: [{
          type: 'video/mp4', // mp4
          src: ''
        }]
        // poster: `https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg`,
      },
      title: [
        '小米MIX Alpha 开箱视频', '小米5G新品手机发布会', ' Redmi Note 8 系列发布会', '深蓝星球'
      ]
    }
  },
  methods: {
    hideMV (id) {
      this.$store.dispatch('setShowVideo', false)
      this.$store.dispatch('setShowMask', false)
      console.log(id, '取消播放的视频')
    },
    getSrc () {
      this.url = `http://q0y9nlogm.bkt.clouddn.com/mv${this.id}.mp4`
      this.playerOptions.sources[0].src = this.url
      console.log(this.url, '播放的视频')
    },
    timer () {
      return setTimeout(() => {
        this.getSrc()
      }, 0)
    },
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded (player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata (player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting (player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying (player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate (player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough (player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      // seek to 10s
      // console.log('example player 1 readied', player)
      // player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    }
  },
  watch: {
    id () {
      this.timer()
    }
  },
  mounted () {
    // console.log(this.id, '播放的')
    this.getSrc()
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  computed: {
    ...mapGetters([
      'isShowVideo',
      'id'
    ]),
    player () {
      return this.$refs.videoPlayer.player
    }
  }
}
</script>

<style scoped lang="stylus">
.mi-dialog__wrapper
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  z-index 1001
  // &.home-video-dialog
  //   opacity 1
  .mi-dialog
    position: relative
    .mi-dialog__header
      position: relative;
      height: 32px;
      padding: 14px 20px;
      line-height: 32px;
      background-color: #f5f5f5
      .mi-dialog__title
        font-size: 18px;
        font-weight: 400;
        color: #424242;
        vertical-align: middle
    .mi-dialog__headerbtn
      position: absolute;
      right: 14px;
      top: 14px;
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #757575;
      cursor: pointer;
      -webkit-transition: all .2s;
      transition: all .2s;
      z-index: 1001;
      border-radius: 15px
      &:hover
        color: #fff;
        background-color: #e53935
      .mi-dialog__close
        vertical-align: middle;
        font-size: 24px;
        font-weight: 200
    .mi-dialog__body
      // padding: 20px
      .mi-dialog__inner
        margin 0
        padding 0
      .mi-video-player
        width: 100%;
        height: 100%
        .mi-video-wrapper
          position: relative;
          background-color: #000;
          overflow: hidden
          .mi-video-box
            width 100%
            height 100%
</style>
