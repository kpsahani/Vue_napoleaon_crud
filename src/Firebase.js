import firebase from '@firebase/app'
import 'firebase/firestore'
// import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  // Please use your own configue info
  var config = {
    apiKey: "AIzaSyCydmAk7QNRgm6tnb1bmev0pa9e9zmPxTc",
    authDomain: "vue-firebase-tutorial-4cbbd.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-4cbbd.firebaseio.com",//https://console.firebase.google.com/project/vue-firebase-tutorial-4cbbd/database/vue-firebase-tutorial-4cbbd/data/
    projectId: "vue-firebase-tutorial-4cbbd",
    storageBucket: "vue-firebase-tutorial-4cbbd.appspot.com",
    messagingSenderId: "110455306389",
    appId: "1:110455306389:web:6583a1ed1a489851",
    // timestampsInSnapshots: true
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}