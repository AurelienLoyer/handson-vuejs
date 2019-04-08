import Vue from 'vue'
import App from './App'
import './filters/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
