import Vue from 'vue'
import App from './App'
import Router from './Router'
import './filters/index'
import axios from 'axios'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')
