<template lang="html">
  <div class="thumbnail">
    <img v-bind:src="item.image" alt="">
    <div class="caption">
      <h4 class="pull-right">{{item.price}} €</h4>
      <h4><a href="#">{{item.name}}</a>
      </h4>
      <p>{{item.description}}</p>
    </div>
    <div class="ratings">
      <button type="button" class="pull-right btn btn-primary" aria-label="Ajoutez au Panier">Ajouter</button>
      <p>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star-empty"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'produit',
  props: ['item']
}
</script>

<style lang="css">
</style>
