import Vue from 'vue'

Vue.filter('currency', function (value) {
  if (!value) return ''
  value = value.toString()
  return value + ' €'
})
