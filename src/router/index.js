import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import join from '../pages/join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
  ]
})
