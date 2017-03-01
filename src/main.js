// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Filters from './filters/capitalize.js'
// var Filters = require('./filters/index.js');
import VueResource from 'vue-resource'
import Router from './Router'

Vue.use(VueResource)

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('uppercase', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: Router,
  components: { App }
})
