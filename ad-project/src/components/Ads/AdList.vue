<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 ofset-sm3>
        <h1 class="text--secondary"> my adds List</h1>
        <v-card class="mb-5 pr-8" v-for="ad in myAds" :key="ad.id">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imageSrc" height="150">

              </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2> {{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds
    }
  }
}
</script> 