<template>
  <div class="songer_item"
       @click="itemclick">
    <div class="left">
      <slot>默认内容</slot>
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
      default: null
    }
  },
  data () {
    return {

    }
  },
  methods: {
    itemclick () {
      this.$emit('itemClick', this.itemInfo)
    }
  }
}
</script>
<style scoped lang="less">
.songer_item {
  height: 0.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.15rem;
  margin: 0 0.12rem;
  border-radius: 0.06rem;
  border: 0.01rem solid #e4e4e4;
  background-color: #fbfbfb;
  > .left {
    flex: 1;
    font-size: 0.18rem;
  }
  > .right {
    width: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 0.1rem;
    }
  }
}
</style>
