<template>
  <div class="song_item"
       @click="clickItem">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  mounted () { },
  props: {
    itemInfo: {
      type: Object,
      default: null
    }
  },
  components: {},
  data () {
    return {

    }
  },
  methods: {
    clickItem () {
      this.$emit('itemClick', this.itemInfo)
    }
  }
}
</script>
<style scoped lang="less">
.song_item {
  height: 0.8rem;
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
    width: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    flex: 1;
    font-size: 0.18rem;
  }
}
</style>
