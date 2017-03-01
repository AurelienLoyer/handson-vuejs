<template lang="html">
  <div class="">
    <v-menu :bieres="panier"></v-menu>

    <div class="container">

      {{panier}}

    </div>

    <div class="container">
      <hr>
      <!-- Footer -->
      <v-footer></v-footer>
    </div>

  </div>
</template>

<script>

import Menu from './Menu'
import Footer from './Footer'

export default {
  name: 'basket',
  components: {
    'v-menu': Menu,
    'v-footer': Footer
  },
  data () {
    return {
      panier: [],
      apiurl: 'http://localhost:1337/api/v1'
    }
  },
  created () {
    this.getPanier()
  },
  methods: {
    getPanier: function () {
      this.$http.get(this.apiurl + '/basket').then(response => {
        this.panier = response.body
      })
    }
  }
}
</script>

<style lang="css">
</style>
