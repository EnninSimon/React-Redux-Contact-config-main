import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUNkOzf74HUddM4-2gcZb9TB8vhcCevwE",
    authDomain: "contact-app-7a371.firebaseapp.com",
    projectId: "contact-app-7a371",
    storageBucket: "contact-app-7a371.appspot.com",
    messagingSenderId: "723668051740",
    appId: "1:723668051740:web:c83a6f3dac4ecfd918bcd9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;