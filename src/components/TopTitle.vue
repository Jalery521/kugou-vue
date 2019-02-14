<template>
  <div class="title"
       :style="styleObj">
    <div class="left"
         @click='goBack'>
      <img src="../assets/imgs/goback.png"
           alt="">
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
  components: {},
  props: {
    styleObj: {
      type: Object,
      defalut: null
    }
  },
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="less">
.title {
  height: 0.54rem;
  display: flex;
  > .left {
    width: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 0.16rem;
    }
  }
  > .right {
    flex: 1;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.54rem;
  }
}
</style>
