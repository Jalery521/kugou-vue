<template>
  <div>
    <DetailCover :styleObj="styleObj">酷狗飙升榜</DetailCover>
    <SongItem :showLeft="true">
      <span slot="left">1</span>
      <p> 明天你好</p>
    </SongItem>
  </div>
</template>

<script>
import DetailCover from '../components/DetailCover.vue'
import SongItem from '../components/SongItem.vue'
export default {
  created () { },
  mounted () { },
  components: {
    DetailCover,
    SongItem
  },
  data () {
    return {
      styleObj: {
        color: '#fff',
        backgroundImage: 'url(http://imge.kugou.com/mcommon/400/20190118/20190118110643880962.jpg)'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>
