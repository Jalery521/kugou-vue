<template>
  <div class="media_item"
       @click="itemclick">
    <div class="left">
      <slot name="left">这是左侧图片</slot>
    </div>
    <div class="middle">
      <slot name="middle">这是中间内容</slot>
    </div>
    <div class="right">
      <img src="../assets/imgs/arrow_icon.png"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  mounted () { },
  components: {},
  props: {
    itemInfo: {
      type: Object,
      default: null
    }
  },
  data () {
    return {

    }
  },
  methods: {
    itemclick () {
      this.$emit('clickItem', this.itemInfo)
    }
  }
}
</script>
<style scoped lang="less">
.media_item {
  height: 1.2rem;
  display: flex;
  align-items: center;
  padding-left: 0.18rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0.18rem;
    right: 0;
    bottom: 0;
    height: 0.01rem;
    background-color: #e4e4e4;
  }
  > .left {
    width: 1rem;
  }
  > .middle {
    padding-left: 0.18rem;
    flex: 1;
    font-size: 0.18rem;
  }
  > .right {
    width: 0.4rem;
    position: relative;
    > img {
      position: absolute;
      width: 0.1rem;
      right: 0.12rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
