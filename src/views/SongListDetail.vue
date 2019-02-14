<template>
  <div>
    <DetailCover :showBottom="false"
                 :styleObj="styleObj">
      新春大吉!2019年春节贺岁电影大赏
    </DetailCover>
    <DescribeInfo>
      农历新年就要到了，每年的新年都会有不少的贺岁电影与大家见面，陪大家一起过新年，而据说今年2019年春节被称为史上最强春节档电影年。
      那是因为2019年大年初一，13部影片实力上线，5部喜剧、1部科幻、1部古装、1部神话、1部港片、1部情感、3部动画、将充分展现其超强实力，因此被称为史上最强“春节档”。“暑期档”火了一把的沈腾，又有3部电影现身“春节档”，出任话题与幽默担当。为本也火爆的“春节档”，又添了一把柴。大年初一将上演一场喜剧的饕餮圣宴。“宇宙英雄”能否再次创造票房奇迹？开心麻花能否再创奇迹？2019年“春节档”票房冠军花落谁家？敬请期待！
      贺岁电影如下：
      《疯狂的外星人》、《流浪地球》、《新喜剧之王》、《情圣2》、《蒲松龄之兰若仙踪》、《飞驰人生》、《八仙之各显神通》、《小猪佩奇过大年》、《廉政风云》、《八戒传说》、《猪猪侠：猪年吉祥》、《日不落酒店》、《熊出没•原始时代》

      注：由于《八戒传说》，《猪猪侠：猪年吉祥》，《八仙之各显神通》无歌曲，所以无法收录，请谅解！

      【影视专区】
      整理：谢景行/覃海智
    </DescribeInfo>
    <SongItem @itemClick="clickItem"
              v-for="item in playList"
              :key="item.id"
              :itemInfo="item">{{item.author}} - {{item.songname}}</SongItem>
  </div>
</template>

<script>
import DetailCover from '../components/DetailCover.vue'
import SongItem from '../components/SongItem.vue'
import DescribeInfo from '../components/DescribeInfo.vue'
import { mapActions } from 'vuex'
export default {
  created () { },
  mounted () { },
  components: {
    DetailCover,
    SongItem,
    DescribeInfo
  },
  data () {
    return {
      styleObj: {
        backgroundImage: 'url(http://imge.kugou.com/soft/collection/400/20190202/20190202211005781044.jpg)',
        color: '#fff'
      },
      playList: [{
        id: 12,
        songname: '疾风',
        author: '疾风少女',
        img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20190113/20190113203423451.jpg'
      }, {
        id: 13,
        songname: '小猪佩奇过大年',
        author: '谢娜',
        img: 'http://singerimg.kugou.com/uploadpic/softhead/200/20180522/20180522140241883.jpg'
      }],
      isCommit: false
    }
  },
  methods: {
    ...mapActions([
      'changePlayList',
      'changeCurrentPlayInfo'
    ]),
    clickItem (obj) {
      if (!this.isCommit) {
        this.$store.dispatch('changePlayList', this.playList)
      }
      this.changeCurrentPlayInfo(obj)
    }
  }
}
</script>
<style scoped lang="less">
</style>
