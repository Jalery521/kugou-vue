<template>
  <div class="media_play">
    <div class="left">
      <img :src="playInfo.img"
           alt="">
    </div>
    <div class="middle">
      <p>{{playInfo.songname}}</p>
      <p>{{playInfo.author}}</p>
    </div>
    <div class="right">
      <a href="javascript:void(0)"
         @click="changeState">
        <img v-show="isPlay"
             src="../assets/imgs/pause_icon.png"
             alt="">
        <img v-show="!isPlay"
             src="../assets/imgs/play_icon.png"
             alt="">
      </a>
      <a href="javascript:void(0)"
         @click="nextSong">
        <img src="../assets/imgs/next_icon.png"
             alt="">
      </a>
      <a href="javascript:void(0)">
        <img src="../assets/imgs/download_icon.png"
             alt="">
      </a>
      <audio src=""></audio>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  mounted () { },
  computed: {
    isPlay () {
      return this.$store.state.isPlay
    },
    playInfo () {
      return this.$store.state.currentPlayInfo
    }
  },
  components: {},
  methods: {
    changeState () {
      this.$store.commit('changePlayState', !this.isPlay)
    },
    nextSong () {
      this.$store.commit('nextInfo')
    }
  }
}
</script>
<style scoped lang="less">
.media_play {
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0.05rem;
  left: 0;
  right: 0;
  height: 0.8rem;
  bottom: 0;
  background-color: #000;
  > .left {
    width: 0.7rem;
    border-radius: 0.04rem;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
  > .middle {
    flex: 1;
    padding-left: 0.12rem;
    > p {
      &:nth-of-type(1) {
        color: #fff;
        font-weight: bold;
        font-size: 0.14rem;
      }
      &:nth-of-type(2) {
        color: #6f6f6f;
        font-size: 0.13rem;
        margin-top: 0.02rem;
      }
    }
  }
  > .right {
    width: 1.2rem;
    display: flex;
    justify-content: space-around;
    > a {
      img {
        width: 0.3rem;
      }
    }
  }
}
</style>
