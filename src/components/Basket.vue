<template lang="html">
  <div class="">
    <v-menu :bieres="panier"></v-menu>

    <div class="container">

      <div class="panel panel-default">
        <div class="panel-heading">Basket</div>
        <ul class="list-group">
          <li class="list-group-item" v-for="produit in panier">
            {{produit.label}} <span class="label label-primary pull-right">{{produit.price}} €</span>
          </li>
        </ul>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">Order</div>
        <div class="panel-body">
          <form>
            <div class="form-group has-error">
              <label class="control-label" for="name">Name</label>
              <input type="text" id="name" class="form-control" name="name" required>
            </div>

            <div class="form-group has-error">
              <label class="control-label" for="address">Address</label>
              <textarea id="address" class="form-control" name="address" required ></textarea>
            </div>

            <div class="form-group has-error">
              <label class="control-label" for="creditCard">Credit card number</label>
              <input id="creditCard" class="form-control" name="creditCard" pattern="^[0-9]{3}-[0-9]{3}$">
            </div>

            <div class="col-xs-12">
              <button type="submit" class="btn btn-success pull-right">
                Validate
              </button>
            </div>
          </form>
        </div>
      </div>

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
