<template lang="html">

  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Zenika Ecommerce</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <a v-if="bieres.length > 0" href="#/basket.html">Accéder à votre panier ({{bieres.length}} articles - {{total}})€</a>
            <a v-if="bieres.length === 0" href="#/basket.html">Accéder à votre panier (vide)</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'menu',
  props: ['bieres'],
  computed: {
    total: function () {
      let total = 0
      this.bieres.map((biere) => {
        total += parseFloat(biere.price)
      })
      return total
    }
  }
}
</script>

<style lang="css">
</style>
