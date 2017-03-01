import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '*', component: require('./components/Home')},
  {path: 'basket', component: require('./components/Basket')}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
