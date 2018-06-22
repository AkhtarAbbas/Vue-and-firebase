import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyAIH6Sdw5chpTrJZAI3D00EN23uavq_pdQ',
  authDomain: 'vue-spa-6ab5c.firebaseapp.com',
  databaseURL: 'https://vue-spa-6ab5c.firebaseio.com',
  projectId: 'vue-spa-6ab5c',
  storageBucket: 'vue-spa-6ab5c.appspot.com',
  messagingSenderId: '755221337120'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})
