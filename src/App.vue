<template>
  <div id="app"
       :class="showPlayer?'padding_bottom':''">
    <TopBar></TopBar>
    <router-view></router-view>
    <MediaPlayer v-show="showPlayer"></MediaPlayer>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import MediaPlayer from './components/MediaPlayer.vue'
export default {
  name: 'app',
  components: {
    TopBar,
    MediaPlayer
  },
  computed: {
    showPlayer () {
      return this.$store.state.playerShow
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/comment.css";
body {
  padding-top: 0.56rem;
}
.padding_bottom {
  padding-bottom: 0.8rem;
}
</style>
