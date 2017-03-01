<template>
  <div>

    <v-menu :bieres="panier"></v-menu>

    <div class="container">

      <div class="row">

        <div class="col-md-12">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4" v-for="produit in sortedProduct" v-if="produit.stock > 0">
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
  data () {
    return {
      produits: [],
      apiurl: 'http://localhost:1337/api/v1'
    }
  },
  methods: {
    getPanier: function () {
      this.$http.get(this.apiurl + '/basket').then(response => {
        this.$store.commit('createPanier', response.body)
      })
    },
    getProduis: function () {
      this.$http.get(this.apiurl + '/beers').then(response => {
        this.produits = response.body
      })
    },
    ajoutPanier: function (biere) {
      this.$http.post(this.apiurl + '/basket', biere).then(response => {
        if (response.status === 201) {
          this.$store.commit('addToBasket', biere)
          this.getProduis()
        }
      })
    }
  },
  computed: {
    sortedProduct: function () {
      return this.produits.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price)
      })
    },
    panier: function () {
      return this.$store.state.panier
    }
  },
  created () {
    this.getProduis()
    this.getPanier()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
