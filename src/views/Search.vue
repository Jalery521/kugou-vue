<template>
  <div class='search'>
    <TopTitle :styleObj="styleObj">搜索</TopTitle>
    <div class="search_box">
      <div class="left">
        <input type="text"
               placeholder="歌手/歌名/拼音"
               @focus="isFocus=true"
               @blur="isFocus=false">
        <img src="../assets/imgs/search_icon.png"
             alt="">
      </div>
      <div class="right">
        <button :class="isFocus?'foucs':''"
                type="button">搜索</button>
      </div>
    </div>
    <div class="hot">
      <p class="title">最近热门</p>
      <SongItem v-for="(item,index) in hotList"
                :showRight="false"
                :key="index"
                :itemInfo="item"
                @itemClick="getSong">{{item.songname}}</SongItem>
    </div>
  </div>
</template>

<script>
import SongItem from '../components/SongItem.vue'
import TopTitle from '../components/TopTitle.vue'
export default {
  created () { },
  mounted () { },
  components: {
    SongItem,
    TopTitle
  },
  data () {
    return {
      isFocus: false,
      styleObj: {
        boxShadow: '0 0.0625rem 0.0625rem #e4e4e4'
      },
      hotList: [{
        songname: '独家首发',
        path: ''
      }, {
        songname: '2019春晚',
        path: ''
      }, {
        songname: '明星送福',
        path: ''
      }, {
        songname: '儿歌大全',
        path: ''
      }]
    }
  },
  methods: {
    getSong (obj) {
      console.log(obj)
    }
  }
}
</script>
<style scoped lang="less">
.search {
  > .search_box {
    height: 0.64rem;
    padding-left: 0.15rem;
    display: flex;
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      > input {
        width: 100%;
        height: 0.34rem;
        border: 0.01rem solid #e4e4e4;
        border-radius: 0.04rem;
        padding-left: 0.32rem;
        font-size: 0.18rem;
      }
      > img {
        position: absolute;
        width: 0.22rem;
        left: 0.08rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .right {
      width: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      > button {
        width: 0.6rem;
        height: 0.4rem;
        background-color: #e5e5e5;
        border-radius: 0.04rem;
        font-size: 0.18rem;
        color: #959595;
        &.foucs {
          background-color: #2ba2fa;
          color: #fff;
        }
      }
    }
  }
  .hot {
    > .title {
      color: #69a3f7;
      text-indent: 0.18rem;
      line-height: 0.5rem;
      font-size: 0.14rem;
      border-bottom: 0.01rem solid #ccc;
    }
  }
}
</style>
