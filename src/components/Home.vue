<template>
  <div>

    <v-menu></v-menu>

    <div class="container">

      <div class="row">

        <div class="col-md-12">

          <div class="row">

            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-produit></v-produit>
            </div>

            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-produit></v-produit>
            </div>

            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-produit></v-produit>
            </div>

            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-produit></v-produit>
            </div>
          </div>

        </div>

      </div>

    </div>
    <!-- /.container -->

    <div class="container">
      <hr>
      <!-- Footer -->
      <v-footer></v-footer>

    </div>
    <!-- /.container -->

  </div>

</template>

<script>
import Produit from './Produit'
import Menu from './Menu'
import Footer from './Footer'

export default {
  name: 'home',
  components: {
    'v-menu': Menu,
    'v-footer': Footer,
    'v-produit': Produit
  },
  data () {
    return {
      produits: [

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
