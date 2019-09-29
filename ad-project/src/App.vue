<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer 
        app 
        temporary
        v-model="drawer">
      <v-list>
          <v-list-item-group color="primary">
            <v-list-item
            v-for="(link, i) in links"
            :key="i"
            :to="link.url"
            >
            <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app  color="primary accent-4" dark>
      <v-app-bar-nav-icon 
        class="hidden-md-and-up"
        @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/">
          <span class="logo">application</span>
        </router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
            text
            v-for="link in links"
            :key="link.title"
            :to="link.url">
            <v-icon left>{{link.icon}}</v-icon>
           {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
        <!-- If using vue-router -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
          drawer: false,
          links: [
              {
                title: 'login',
                icon: 'mdi-lock',
                url: '/login'
              },
              {
                title: 'regictration',
                icon: 'mdi-face',
                url: '/registration'
              },
              {
                title: 'orders',
                icon: 'mdi-bookmark',
                url: '/orders'
              },
              {
                title: 'New Ad',
                icon: 'mdi-border-colour',
                url: '/new'
              },
              {
                title: 'My Ads',
                icon: 'mdi-xi',
                url: '/list'
              }
          ],
      }
  }
};
</script>
<style scoped>
  .logo {
    cursor: pointer;
    color: aliceblue;
  }
  
</style>
