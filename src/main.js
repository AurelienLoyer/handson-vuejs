import Vue from 'vue'
import App from './App'
import Router from './Router'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import './filters/index'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(Vuex)
Vue.use(VeeValidate)

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

new Vue({
  render: h => h(App),
  store,
  router: Router,
}).$mount('#app')
