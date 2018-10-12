import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

import FilmHome from '@/views/film-home/film-home'
import Detailed from '@/views/detailed/detailed'
import Search from '@/views/search/search'
import FilmmakerInformation from '@/views/filmmaker-information/filmmaker-information'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FilmHome',
      component: FilmHome
    },
    {
      path: '/detailed',
      name: 'Detailed',
      component: Detailed,
      props: true
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      props: true
    },
    {
      path: '/filmmakerInformation',
      name: 'FilmmakerInformation',
      component: FilmmakerInformation,
      props: true
    }
  ]
})
