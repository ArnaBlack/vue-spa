<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 affset-sm3>
        <h1 class="mb-3 text--seccondary">Create new Ad</h1>
        <v-form v-model="valid" ref="form" validation>
                  <v-text-field
                    label="title"
                    name="title"
                    type="text"
                    required
                    :rules="[v => !!v || 'title is requered']"
                    v-model="title"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="ad desc"
                    name="desc"
                    type="text"
                    multi-line
                    v-model="desc"
                    :rules="[v => !!v || 'desc is requered']"
                  ></v-text-field>
        </v-form>
        <v-layout>
          <v-flex xs12>
                <v-btn
                color="blue-grey"
                class="ma-2 white--text">
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
              <img src="" height="150">
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-switch label="add to promo" v-model="promo"></v-switch>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-btn class="success" @click="createAdd" :disabled="!valid"> create Add</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      desc: '',
      valid: false,
      promo: false,
      imageSrc: 'https://avatars.mds.yandex.net/get-pdb/236760/fc7e9c5e-b996-45c9-a20d-4d5958268190/s1200'      
    }
  },
  methods: {
    createAdd() {
      if( this.$refs.form.validate) {
        const ad = {
          title: this.title,
          desc: this.desc,
          promo: this.promo,
          imageSrc: this.imageSrc
        }

        this.$store.dispatch('createAd', ad);
      }
    }
  }
}
</script>