<template>
  <div class="song_list">
    <NavBar :checkIndex="2"></NavBar>
    <MediaItem v-for="(item,index) in songList"
               :key="index"
               @clickItem="itemClick"
               :itemInfo="item">
      <img slot="left"
           :src="item.img"
           style="width:100%"
           alt="">
      <div slot="middle"
           class="item_middle">
        <p class="title">{{item.content}}</p>
        <div>
          <img src="../assets/imgs/icon_music.png"
               alt="">
          <span>{{item.count}}</span>
        </div>
      </div>
    </MediaItem>
  </div>
</template>

<script>
import MediaItem from '../components/MediaItem'
import NavBar from '../components/NavBar'
export default {
  created () { },
  mounted () { },
  components: {
    MediaItem,
    NavBar
  },
  data () {
    return {
      songList: [{
        id: 1,
        img: 'http://imge.kugou.com/soft/collection/400/20190205/20190205010838216621.jpg',
        content: '2019央视春晚歌曲回顾',
        count: 194871
      }, {
        id: 2,
        img: 'http://imge.kugou.com/soft/collection/400/20190129/20190129184204466985.jpg',
        content: '华语男生 | 喉结颤动,入耳倾心',
        count: 67654
      }, {
        id: 3,
        img: 'http://imge.kugou.com/soft/collection/400/20190202/20190202120819421303.jpg',
        content: '每周推荐歌曲',
        count: 158802221
      }, {
        id: 4,
        img: 'http://imge.kugou.com/soft/collection/400/20190204/20190204000642926595.jpg',
        content: '日语新歌每日推荐',
        count: 445727
      }, {
        id: 5,
        img: 'http://imge.kugou.com/soft/collection/400/20190202/20190202020948373945.jpg',
        content: '嘿, 你听过这些可爱的歌吗?',
        count: 777263
      }, {
        id: 6,
        img: 'http://imge.kugou.com/soft/collection/400/20190203/20190203040827593799.jpg',
        content: '伤感: 哪些怀念的, 已经回不去了',
        count: 825596
      }]
    }
  },
  methods: {
    itemClick (obj) {
      this.$router.push({ path: '/songlist_detail', query: { id: obj.id } })
    }
  }
}
</script>
<style scoped lang="less">
.song_list {
  margin-top: 0.6rem;
}
.item_middle {
  > div {
    margin-top: 0.06rem;
    display: flex;
    height: 0.14rem;
    line-height: 0.14rem;
    width: 100%;
    > img {
      width: 0.14rem;
      height: 0.14rem;
      margin-right: 0.05rem;
    }
    > span {
      font-size: 0.14rem;
      color: #9b9b9b;
    }
  }
}
</style>
