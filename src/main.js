
// import firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/firebase-auth'
// import 'firebase/storage'
// import firebase from './Firebase'
import {fb}   from './Firebase'
import Vue from 'vue'
// import VueAxios from 'vue-axios'
// import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import router from './router'
import store from './store'

// Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false
let app ='';

// import VueFirestore from 'vue-firestore'
 
// require('firebase/firestore')


// Vue.use(VueFirestore, {
//   key: 'id',         // the name of the property. Default is '.key'.
//   enumerable: true  //  whether it is enumerable or not. Default is true.
// })
// Vue.use(VueFirestore,axios)
import 'popper.js';
import 'bootstrap';


import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;
// Initialize Firebase
// let config = {
//   apiKey: "AIzaSyCydmAk7QNRgm6tnb1bmev0pa9e9zmPxTc",
//   authDomain: "vue-firebase-tutorial-4cbbd.firebaseapp.com",
//   databaseURL: "https://vue-firebase-tutorial-4cbbd.firebaseio.com",//https://console.firebase.google.com/project/vue-firebase-tutorial-4cbbd/database/vue-firebase-tutorial-4cbbd/data/
//   projectId: "vue-firebase-tutorial-4cbbd",
//   storageBucket: "vue-firebase-tutorial-4cbbd.appspot.com",
//   messagingSenderId: "110455306389",
//   appId: "1:110455306389:web:6583a1ed1a489851",
//   timestampsInSnapshots: true
// };
// firebase.initializeApp(config);
// var db = firebase.firestore();
// export default {db}


// var users = db.ref('Admin_Users');
// Vue.use(VueAxios, axios)
// Vue.use(VueAuthenticate, {
//   baseUrl: 'http://localhost:8000', // Your API domain
  
// })

// fb.auth().onAuthStateChanged(()=>
// VueAuthenticate.auth().onAuthStateChanged(()=>{
//   if(!app){
//     app = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app')
    
//   }
// })

Vue.config.productionTip = false

app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')