<template>
  <div>

    <v-menu :bieres="panier"></v-menu>

    <div class="container">

      <div class="row">

        <div class="col-md-12">

          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-beer v-on:ajout="ajoutPanier" :item="produits[0]"></v-beer>
            </div>

            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-beer v-on:ajout="ajoutPanier" :item="produits[1]"></v-beer>
            </div>

            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-beer v-on:ajout="ajoutPanier" :item="produits[2]"></v-beer>
            </div>

            <div class="col-sm-4 col-lg-4 col-md-4">
              <v-beer v-on:ajout="ajoutPanier" :item="produits[3]"></v-beer>
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
    ajoutPanier: function (biere) {
      this.panier.push(biere)
    }
  },
  data () {
    return {
      panier: [],
      produits: [
        {
          'label': 'Queue de Charrue',
          'price': '3.70',
          'image': '/static/images/queuedecharrue.jpg',
          'description': 'La Queue de Charrue est une famille de bières brassées pour la Brasserie Vanuxeem. La plus connue et typique est la Queue de Charrue brune. Son nom ...',
          'note': 4
        },
        {
          'label': 'La Corbeau',
          'price': '3.10',
          'image': '/static/images/corbeau.jpg',
          'description': 'La bière du Corbeau est une bière blonde trés gazeuse et avec une belle mousse persistante.Le nez propose des arômes de citron, de végétal et de caramel.la ...',
          'note': 3
        },
        {
          'label': 'Jack Hammer',
          'price': '3.50',
          'image': '/static/images/jeackhammer.jpg',
          'description': 'Selon la rumeur, la Jack Hammer serait une bière tellement houblonnée que l\'on y retrouverait plus d\'amertume que le palais humain ne puisse détecter.',
          'note': 4
        },
        {
          'label': 'Rince Cochon',
          'price': '3.50',
          'image': '/static/images/rincecochon.jpg',
          'description': 'Autrefois brassée à Annoeullin par la SBA sous le nom de "Le Rince Cochon", cette bière est aujourd\'hui brassée par la brasserie Haacht, en Belgique, qui ...',
          'note': 4
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
