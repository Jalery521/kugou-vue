<template>
  <div class="song_item"
       @click="clickItem">
    <div class="left"
         v-if="showLeft">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot></slot>
    </div>
    <div v-if="showRight"
         class="right">
      <img src="../assets/imgs/download_icon_2.png"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  created () {
  },
  mounted () { },
  props: {
    showLeft: {
      type: Boolean,
      default: false
    },
    itemInfo: {
      type: Object,
      default: null
    },
    showRight: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  data () {
    return {

    }
  },
  computed: {
    playerShow () {
      return this.$store.state.playerShow
    }
  },
  methods: {
    clickItem () {
      if (!this.playerShow) {
        this.$store.commit('cutPlayerShow', true)
      }
      this.$emit('itemClick', this.itemInfo)
    }
  }
}
</script>
<style scoped lang="less">
.song_item {
  height: 0.74rem;
  width: 100%;
  padding-left: 0.16rem;
  display: flex;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    height: 0.01rem;
    background-color: #e4e4e4;
    position: absolute;
    left: 0.16rem;
    right: 0rem;
    bottom: 0rem;
  }
  .left {
    width: 0.4rem;
    text-align: center;
    line-height: 0.74rem;
  }
  .middle {
    flex: 1;
    font-size: 0.18rem;
  }
  .right {
    width: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 0.2rem;
      height: 0.2rem;
    }
  }
}
</style>
