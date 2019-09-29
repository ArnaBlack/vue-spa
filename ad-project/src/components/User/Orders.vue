<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 ofset-sm3>
        <h1 class="text-secondary mb-3">Orders</h1>
         <v-list two-line subheader>
           <v-list-item v-for="order in orders" 
                        :key="order.id">
            <v-list-item-action>
              <v-checkbox @change="markDone(order)" 
			  color="success"
              :input-value="order.done"></v-checkbox>
            </v-list-item-action>
           <v-list-item-content>
             <v-list-item-title>{{order.name}}</v-list-item-title>
            <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
           </v-list-item-content>
           <v-list-item-action>
             <v-btn class="primary"
			 :to="'/ad/' + order.id" >Open</v-btn>
           </v-list-item-action>
           </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      orders: [
        {
          id: '123rfw',
          name: 'Anna',
          phone: '89898989898',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone(order) {
      order.done = true
    }
  }
}
</script>