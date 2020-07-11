import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDjPsk0KsvoFFBJJ4JGrSx4GH_VeWdoSK4",
    authDomain: "router-vue.firebaseapp.com",
    databaseURL: "https://router-vue.firebaseio.com",
    projectId: "router-vue",
    storageBucket: "router-vue.appspot.com",
    messagingSenderId: "831670632929",
    appId: "1:831670632929:web:e1b2bf988aaf6bbca792a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
