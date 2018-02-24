import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = resolve => require(['@/components/home'], resolve);

export default new Router({
	routes: [{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: "*",
			redirect: "/home"
		}
	]
})