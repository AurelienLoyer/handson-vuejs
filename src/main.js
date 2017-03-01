// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from './Router'
import './filters/index'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    panier: []
  },
  mutations: {
    createPanier (state, panier) {
      state.panier = panier
    },
    addToBasket: function (state, beer) {
      state.panier.push(beer)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router: Router,
  components: { App }
})
