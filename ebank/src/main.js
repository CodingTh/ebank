import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/css/base.css"
import api from './utils/base.js'

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
