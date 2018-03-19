import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Recommend = resolve => {
  import('views/recommend').then(module => {
    resolve(module)
  })
}
const Singer = resolve => {
  import('views/singer').then(module => {
    resolve(module)
  })
}
const Rank = resolve => {
  import('views/rank').then(module => {
    resolve(module)
  })
}
const Search = resolve => {
  import('views/search').then(module => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommend',
      name: '主页'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
