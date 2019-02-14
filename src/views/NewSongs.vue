<template>
  <div class="new_songs">
    <NavBar :checkIndex="0"></NavBar>
    <mt-swipe :auto="3000"
              class="swipe">
      <mt-swipe-item v-for="(item,index) in swipeList"
                     :key="index"
                     class="swipe_item">
        <img :src="item"
             alt=""
             class="swipe_img">
      </mt-swipe-item>
    </mt-swipe>
    <div>
      <SongItem v-for="item in playList"
                :key="item.id"
                :itemInfo="item"
                @itemClick="getSong">{{item.author}} - {{item.songname}}</SongItem>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import SongItem from '../components/SongItem.vue'
export default {
  created () { },
  mounted () { },
  data () {
    return {
      swipeList: ['http://imge.kugou.com/mobilebanner/20190202/20190202011636593338.jpg', 'http://m.kugou.com/v3/static/images/index/banner.jpg', 'http://imge.kugou.com/mobilebanner/20190202/20190202004116196153.jpg', 'http://imge.kugou.com/mobilebanner/20190202/20190202010256462733.jpg', 'http://imge.kugou.com/mobilebanner/20190202/20190202010818279283.jpg'],
      playList: [
        {
          id: 1,
          author: '周笔畅',
          songname: '去流浪【流浪地球电影推广曲】',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20190108/20190108203800827.jpg'
        },
        {
          id: 2,
          author: '张靓颖',
          songname: '春夜喜雨 (Live)',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20170628/20170628110356447.jpg'
        },
        {
          id: 3,
          author: '冯提莫',
          songname: '元气满满',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20190102/20190102180610282.jpg'
        },
        {
          id: 4,
          author: 'Michael Qi、董子龙、火箭少女101赖美云、火箭少女101段奥娟',
          songname: '猴子说 (Live|Remix)',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20181206/20181206182011234.jpg'
        },
        {
          id: 5,
          author: '挺齐全',
          songname: 'ALL IN',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20190130/20190130100123586.jpg'
        },
        {
          id: 6,
          author: '蓝心羽',
          songname: '小宇',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20181120/20181120163251820.jpg'
        },
        {
          id: 7,
          author: '河图、汐音社',
          songname: '长夜梦我',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20151214/20151214120402408673.jpg'
        },
        {
          id: 8,
          author: '白小白',
          songname: '直到有天我们都变老',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20180808/20180808180400236.jpg'
        },
        {
          id: 9,
          author: '巫启贤',
          songname: '一路向西【犬爱电影宣传先行曲】',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20140627/20140627210421725836.jpg'
        },
        {
          id: 10,
          author: '浪哥',
          songname: '他乡之人',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20181112/20181112103229664.jpg'
        },
        {
          id: 11,
          author: '梅朵',
          songname: '一岁年龄一岁人',
          img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20190117/20190117175152783.jpg'
        }
      ],
      isCommit: false
    }
  },
  components: {
    SongItem,
    NavBar
  },
  methods: {
    getSong (obj) {
      if (!this.isCommit) {
        this.$store.commit('changePlayList', this.playList)
      }
      this.$store.commit('changeCurrentPlayInfo', obj)
    }
  }
}
</script>
<style scoped lang="less">
.new_songs {
  margin-top: 0.6rem;
}
.new_songs {
  .swipe {
    height: 1.6rem;
    .swipe_item {
      img {
        width: 100%;
        height: 1.6rem;
      }
    }
  }
}
</style>
