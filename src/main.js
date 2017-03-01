// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from './Router'
import './filters/index'
import VeeValidate from 'vee-validate'

Vue.use(VueResource)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: Router,
  components: { App }
})
