import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import * as firebase from 'firebase/app'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBE-YN_MXrj5Tm3RspNHbTPGyIocDt4rGg',
      authDomain: 'itc-ads-a2191.firebaseapp.com',
      databaseURL: 'https://itc-ads-a2191.firebaseio.com',
      projectId: 'itc-ads-a2191',
      storageBucket: '',
      messagingSenderId: '178654694016',
      appId: '1:178654694016:web:b2536c670ba3000746b465'
    });
  }
}).$mount('#app')
