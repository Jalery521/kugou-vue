<template>
  <div class="songer">
    <NavBar :checkIndex="3"></NavBar>
    <div class="hot">
      <SongerCategoryItem v-for="item in songerCategoryInfo.hot"
                          :Key="item.id"
                          :itemInfo="item.id"
                          @itemClick="clickItem">{{item.title}}</SongerCategoryItem>
    </div>
    <div class="zone">
      <SongerCategoryItem v-for="item in songerCategoryInfo.china"
                          :key="item.id"
                          :itemInfo="item.id"
                          @itemClick="clickItem">{{item.title}}</SongerCategoryItem>
    </div>
    <div class="zone">
      <SongerCategoryItem v-for="item in songerCategoryInfo.japanKorea"
                          :key="item.id"
                          :itemInfo="item.id"
                          @itemClick="clickItem">{{item.title}}</SongerCategoryItem>
    </div>
    <div class="zone">
      <SongerCategoryItem v-for="item in songerCategoryInfo.others"
                          :key="item.id"
                          :itemInfo="item.id"
                          @itemClick="clickItem">{{item.title}}</SongerCategoryItem>
    </div>
  </div>
</template>

<script>
import SongerCategoryItem from '../components/SongerCategoryItem.vue'
import NavBar from '../components/NavBar'
export default {
  created () { },
  mounted () { },
  components: {
    SongerCategoryItem,
    NavBar
  },
  data () {
    return {
      songerCategoryInfo: {
        hot: [{
          title: '热门歌手',
          id: 1
        }],
        china: [{
          title: '华语男歌手',
          id: 20
        }, {
          title: '华语女歌手',
          id: 21
        }, {
          title: '华语组合',
          id: 22
        }],
        japanKorea: [{
          title: '日韩男歌手',
          id: 30
        }, {
          title: '日韩女歌手',
          id: 31
        }, {
          title: '日韩组合',
          id: 32
        }],
        others: [{
          title: '欧美男歌手',
          id: 40
        }, {
          title: '欧美女歌手',
          id: 41
        }, {
          title: '欧美组合',
          id: 42
        }]
      }
    }
  },
  methods: {
    clickItem (id) {
      this.$router.push({ path: '/songerList', query: { id } })
    }
  }
}
</script>
<style scoped lang="less">
.songer {
  margin-top: 0.78rem;
  .zone {
    border: 0.01rem solid #e4e4e4;
    border-radius: 0.06rem;
    overflow: hidden;
    margin: 0.2rem 0.12rem 0;
    > div {
      margin: 0;
      border: none;
      border-radius: 0;
      &:nth-of-type(n + 2) {
        border-top: 0.01rem solid #e4e4e4;
      }
    }
  }
}
</style>
