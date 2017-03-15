<template lang="html">
  <div>
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
          <form @submit.prevent="validateBeforeSubmit">
            <div class="form-group" v-bind:class="{ 'has-error': errors.has('name') }">
              <label class="control-label" for="name">Name</label>
              <input type="text" v-validate="'required'" :model="customer.name" id="name" class="form-control" name="name">
            </div>

            <div class="form-group" v-bind:class="{ 'has-error': errors.has('address') }">
              <label class="control-label" for="address">Address</label>
              <textarea id="address" v-validate="'required'" :model="customer.address" class="form-control" name="address" ></textarea>
            </div>

            <div class="form-group" v-bind:class="{ 'has-error': errors.has('creditCard') }">
              <label class="control-label" for="creditCard">Credit card number</label>
              <input id="creditCard" v-validate="'required|regex:^[0-9]{3}-[0-9]{3}$'" :model="customer.creditCard" class="form-control" name="creditCard">
            </div>

            <div class="col-xs-12">
              <button type="submit" class="btn btn-success pull-right" :disabled="errors.any()">
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
      apiurl: 'http://localhost:1337/api/v1',
      customer: {
        'name': '',
        'adresse': '',
        'creditCard': ''
      }
    }
  },
  created () {
    this.getPanier()
  },
  methods: {
    getPanier () {
      this.$http.get(this.apiurl + '/basket').then(response => {
        this.panier = response.body
      })
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then(success => {
        if (!success) {
          // handle error
          return
        }
        this.$http.post(this.apiurl + '/basket/confirm', this.customer).then(response => {
          this.$router.push('/')
        })
      })
    }
  }
}
</script>

<style lang="css">
</style>
