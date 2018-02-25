import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = resolve => require(['@/components/home/'], resolve);
const trade = resolve => require(['@/components/trade/'], resolve);
const report = resolve => require(['@/components/report/'], resolve);
const user = resolve => require(['@/components/user/'], resolve);


export default new Router({
	routes: [{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/trade',
			name: 'trade',
			component: trade
		},
		{
			path: '/report',
			name: 'report',
			component: report
		},
		{
			path: '/user',
			name: 'user',
			component: user
		},
		{
	      path: '/',
	      name: 'home',
	      component: home
	    }
    /*,
		{
			path: "*",
			redirect: "/home"
		}*/
	]
})