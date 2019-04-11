import Vue from 'vue'
import App from './App'
import Router from './Router'
import './filters/index'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')
