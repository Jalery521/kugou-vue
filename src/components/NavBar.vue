<template>
  <ul class='nav_list'>
    <li v-for='(item,index) in navList'
        @click='cutOption(item.path)'
        :class="checkIndex===index?'active':''"
        :key='index'>
      <router-link :to="item.path">{{item.title}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    checkIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      navList: [{ title: '新歌', path: '/newsongs' }, { title: '排行', path: '/ranking' }, { title: '歌单', path: '/songlist' }, { title: '歌手', path: '/songercategory' }]
    }
  },
  methods: {
    cutOption (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang='less'>
.nav_list {
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0.02rem 0.02rem 0.02rem #f7f7f7;
  margin-bottom: 0.04rem;
  position: fixed;
  background-color: #fff;
  z-index: 99;
  top: 0.56rem;
  left: 0;
  right: 0;
  > li {
    flex: 1;
    height: 0.6rem;
    a {
      font-size: 0.2rem;
      display: block;
      width: 100%;
      line-height: 0.6rem;
      text-align: center;
    }
    &.active {
      border-bottom: 0.04rem solid #2ca2f9;
    }
  }
}
</style>
