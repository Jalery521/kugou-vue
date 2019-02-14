<template>
  <div class="describe_info"
       :class="isOpen?'':'default_height'">
    <div class="left">
      <slot>
      </slot>
    </div>
    <div class="right"
         @click="changeState">
      <img v-show="!isOpen"
           src="../assets/imgs/close_icon.png"
           alt="">
      <img v-show="isOpen"
           src="../assets/imgs/open_icon.png"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  mounted () { },
  components: {},
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    changeState () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style scoped lang="less">
.describe_info {
  display: flex;
  padding: 0.14rem 0 0.14rem 0.14rem;
  box-shadow: 0 0.02rem 0.02rem #f5f5f5;
  overflow: hidden;
  > .left {
    flex: 1;
    font-size: 0.18rem;
  }
  > .right {
    width: 0.4rem;
    display: flex;
    justify-content: center;
    > img {
      width: 0.2rem;
      height: 0.2rem;
    }
  }
}
.default_height {
  height: 0.4rem;
}
</style>
