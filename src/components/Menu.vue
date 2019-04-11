<template lang="html">

  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Zenika Ecommerce</router-link>
      </div>
      <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <router-link v-if="bieres.length > 0" to="/basket">Accéder à votre panier ({{bieres.length}} articles - {{total}}€)</router-link>
            <router-link v-if="bieres.length === 0" to="/basket">Accéder à votre panier (vide)</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'vmenu',
  props: ['bieres'],
  computed: {
    total: function () {
      let total = 0
      this.bieres.map((biere) => {
        total += parseFloat(biere.price)
      })
      return Math.round(total * 100) / 100
    } 
  }
}
</script>

<style lang="css">
</style>
