import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/basket', component: require('./components/Basket')},
  {path: '/', component: require('./components/Home')}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
