import { mapGetters, mapMutations, mapActions } from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {

  },
  methods: {
    saveSearch (song) {
      console.log(song) // 歌曲信息
      this.selectPlaySong(song) // 添加到播放列表
    },
    ...mapActions([
      'selectPlaySong'
    ])
  }
}

export const playerMixin = {
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  }
}
