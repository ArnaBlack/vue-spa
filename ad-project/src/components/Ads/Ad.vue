<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="mb-5">
              <v-img :src="ad.imageSrc" height="300"/>
              <v-card-text>
                <h2>{{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="warning">Edit</v-btn>
                <v-btn class="success">Buy</v-btn>
              </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    }
  }
}
</script>npm