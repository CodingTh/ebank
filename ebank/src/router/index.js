import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/'
import Trade from '../components/trade/'
import User from '../components/user/'
import Report from '../components/report/'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexMain',
      component: Index
    },
    {
      path: '/trade',
      name: '交易',
      component: Trade
    },
    {
      path: '/report',
      name: '人流洞察',
      component: Report
    },
    {
      path: '/user',
      name: '我的',
      component: User
    }
  ]
})
