<template>
  <header>
    <div class="top_logo">
      <router-link to="/newsongs">
        <img src="../assets/imgs/logo.png"
             alt="">
      </router-link>
    </div>
    <div class="top_download">
      <a href="javascript:void(0)">
        下载酷狗
      </a>
    </div>
    <div class="top_serach">
      <router-link to="/search">
        <img src="../assets/imgs/search.png"
             alt="">
      </router-link>
    </div>
  </header>
</template>
<script>
export default {
}
</script>
<style lang='less' scoped>
header {
  display: flex;
  background-color: #2ca2f9;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.12rem;
  .top_logo {
    img {
      width: 1.31rem;
      height: 0.3rem;
    }
  }
  .top_download {
    width: 1.02rem;
    height: 0.32rem;
    border: 0.01rem solid #fff;
    line-height: 0.30844rem;
    border-radius: 0.05rem;
    margin-left: 0.2rem;
    a {
      color: #fff;
      display: block;
      width: 100%;
      height: 100%;
      line-height: 0.3rem;
      font-size: 0.15rem;
      text-align: center;
    }
  }
  .top_serach {
    position: absolute;
    right: 0.14rem;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: 0.21rem;
      height: 0.21rem;
    }
  }
}
</style>
