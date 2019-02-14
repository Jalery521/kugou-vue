import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const NewSongs = () => import(/* webpackChunkName: "newsongs" */ '../views/NewSongs.vue')
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/newsongs'
    },
    {
      path: '/newsongs',
      component: NewSongs
    },
    {
      path: '/ranking',
      component: () => import(/* webpackChunkName: "ranking" */ '../views/Ranking.vue')
    },
    {
      path: '/songlist',
      component: () => import(/* webpackChunkName: "songlist" */ '../views/SongList.vue')
    },
    {
      path: '/songercategory',
      component: () => import(/* webpackChunkName: "songercategory" */ '../views/SongerCategory.vue')
    },
    {
      path: '/search',
      component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
    },
    {
      path: '/ranking_detail',
      component: () => import(/* webpackChunkName: "rankingdetail" */ '../views/RankingDetail.vue')
    },
    {
      path: '/songlist_detail',
      component: () => import(/* webpackChunkName: "songlistdetail" */ '../views/SongListDetail.vue')
    },
    {
      path: '/songerList',
      component: () => import(/* webpackChunkName:"songerList" */ '../views/SongerList.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
