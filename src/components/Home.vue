<template>
  <div>

    <v-menu :bieres="panier"></v-menu>

    <div class="container">

      <div class="row">

        <div class="col-md-12">

          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4" v-for="produit in sortedBeer(produits,'price','DESC')" v-if="produit.stock > 0">
              <v-beer v-on:ajout="ajoutPanier" :item="produit"></v-beer>
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
import Beer from './Beer'
import Menu from './Menu'
import Footer from './Footer'

export default {
  name: 'home',
  components: {
    'v-menu': Menu,
    'v-footer': Footer,
    'v-beer': Beer
  },
  methods: {
    sortedBeer: function (beers, orderBy, order) {
      if (!beers) return beers
      return beers.sort(function (a, b) {
        if (order === 'DESC') {
          return parseFloat(b[orderBy]) - parseFloat(a[orderBy])
        } else if (order === 'ASC') {
          return parseFloat(a[orderBy]) - parseFloat(b[orderBy])
        } else {
          return parseFloat(a[orderBy]) - parseFloat(b[orderBy])
        }
      })
    },
    ajoutPanier: function (biere) {
      this.produits.find(produit => produit.label === biere.label).stock--
      this.panier.push(biere)
    }
  },
  created () {
    let api_url = 'http://localhost:8080/api/v1';
    this.$http.get(api_url+"/beers").then(response => {
      this.produits = response.body;
    });
  },
  data () {
    return {
      panier: [],
      produits: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
