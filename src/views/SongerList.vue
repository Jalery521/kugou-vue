<template>
  <div>
    <TopTitle :styleObj="styleObj">{{singerListInfo.categoryName}}</TopTitle>
    <SongerItem v-for="item in singerListInfo.singerList"
                :key="item.id"
                :itemInfo="item"
                @itemClick="clickItem">
      <img slot="left"
           :src="item.img"
           alt=""
           style="width:.5rem;">
      {{item.author}}
    </SongerItem>
  </div>
</template>

<script>
import SongerItem from '../components/SongerItem.vue'
import TopTitle from '../components/TopTitle.vue'
export default {
  created () { },
  mounted () { },
  components: {
    SongerItem,
    TopTitle
  },
  data () {
    return {
      styleObj: {
        boxShadow: '0 .01rem .01rem #e4e4e4'
      },
      singerListInfo: {
        category: '1',
        categoryName: '热门歌手',
        singerList: [{
          author: '薛之谦',
          img: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20190103/20190103191232626.jpg',
          id: 11
        }, {
          author: '周杰伦',
          img: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20180515/20180515002522714.jpg',
          id: 12
        }, {
          author: '林俊杰',
          img: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20161209/20161209164303152140.jpg',
          id: 13
        }, {
          author: 'TFBOYS',
          img: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20180518/20180518110342985.jpg',
          id: 14
        }, {
          author: 'G.E.M.邓紫棋',
          img: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20181122/20181122091128804.jpg',
          id: 15
        }, {
          author: '刘德华',
          img: 'http://singerimg.kugou.com/uploadpic/pass/softhead/400/20180507/20180507120242140.jpg',
          id: 16
        }]
      }
    }
  },
  methods: {
    clickItem (obj) {
      console.log(obj)
    }
  }
}
</script>
<style scoped>
</style>
