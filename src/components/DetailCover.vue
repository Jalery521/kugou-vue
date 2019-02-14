<template>
  <div class="detail_cover"
       :style="styleObj">
    <div class="cover">
      <TopTitle>
        <slot>测试</slot>
      </TopTitle>
      <div class="bottom"
           v-if="showBottom">
        <slot name="updateTime">
          上次更新时间：2019-02-07
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from './TopTitle.vue'
export default {
  created () { },
  mounted () { },
  components: {
    TopTitle
  },
  props: {
    showBottom: {
      type: Boolean,
      default: true
    },
    styleObj: {
      type: Object,
      default: null
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.detail_cover {
  height: 2.25rem;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  .bottom {
    height: 0.6rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 0.14rem;
    line-height: 0.6rem;
    text-indent: 0.2rem;
  }
}
</style>
