<template>
  <div class="ranking">
    <NavBar :checkIndex="1"></NavBar>
    <MediaItem v-for="(item,index) in rankingList"
               :key="index"
               :itemInfo="item"
               @clickItem="itemClick">
      <img slot="left"
           :src="item.img"
           class="item_img"
           alt="">
      <p slot="middle">{{item.content}}</p>
    </MediaItem>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import MediaItem from '../components/MediaItem'
export default {
  created () { },
  mounted () { },
  components: {
    MediaItem,
    NavBar
  },
  data () {
    return {
      rankingList: [{
        id: 1,
        img: 'http://imge.kugou.com/mcommon/400/20190118/20190118110641691638.jpg',
        content: '酷狗飙升榜'
      }, {
        id: 2,
        img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122513972113.jpg',
        content: '酷狗TOP500'
      }, {
        id: 3,
        img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122440628627.jpg',
        content: '网络红歌榜'
      }, {
        id: 4,
        img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122331572959.jpg',
        content: 'DJ热歌榜'
      }, {
        id: 5,
        img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122306857444.jpg',
        content: '华语新歌榜'

      }, {
        id: 6,
        img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122238418415.jpg',
        content: '欧美新歌榜'
      }, {
        id: 7,
        img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122119973845.jpg',
        content: '日本新歌榜'
      }, {
        id: 8,
        img: 'http://imge.kugou.com/mcommon/400/20181019/20181019122016271749.jpg',
        content: '粤语新歌榜'
      }]
    }
  },
  methods: {
    itemClick (obj) {
      this.$router.push({ path: '/ranking_detail', query: { id: obj.id } })
    }
  }
}
</script>
<style scoped lang="less">
.ranking {
  margin-top: 0.6rem;
}
.item_img {
  width: 100%;
  height: 100%;
}
</style>
