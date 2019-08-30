import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Trending from '@/components/Trending'
import Browse from '@/components/Browse'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/trending',
      name: 'Trending',
      component: Trending
    },
    {
      path: '/browse',
      name: 'Browse',
      component: Browse
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
