import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Recommend from 'comp/recommend/Recommend'
import Rank from 'comp/rank/Rank'
import Singers from 'comp/singers/Singers'
import Search from 'comp/search/Search'
import Play from 'comp/play/Play'
import User from 'comp/user/User'
import LikeList from 'comp/user/components/LikeList'
import RecentList from 'comp/user/components/RecentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/推荐',
          component: Recommend
        },
        {
          path: '/排行',
          component: Rank
        },
        {
          path: '/歌手',
          component: Singers
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: '/user/我喜欢的',
          component: LikeList
        },
        {
          path: '/user/最近听的',
          component: RecentList
        }
      ]
    }
  ]
})
