<template lang="html">
  <div class="thumbnail" v-bind:class="{ last: item.stock == 1 }">
    <img v-bind:src="item.image" alt="">
    <div class="caption">
      <h4 class="pull-right">{{item.price}} €</h4>
      <h4><a href="#">{{ item.label | uppercase }}</a>
      </h4>
      <p>{{item.description}}</p>
    </div>
    <div class="ratings">
      <button @click="ajouter" type="button" class="pull-right btn btn-primary" aria-label="Ajoutez au Panier">Ajouter</button>
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
  name: 'beer',
  props: ['item'],
  methods: {
    ajouter () {
      this.$emit('ajout', this.item)
    }
  }
}
</script>

<style lang="css">
.last {
    background-color: rgba(255, 0, 0, 0.4)
}
</style>
