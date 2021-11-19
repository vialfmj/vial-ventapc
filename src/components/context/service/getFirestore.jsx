import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSTrkAfca7N4fqT-oMoteofR0Tb7EqB60",
    authDomain: "vial-venta-pc.firebaseapp.com",
    projectId: "vial-venta-pc",
    storageBucket: "vial-venta-pc.appspot.com",
    messagingSenderId: "152086767625",
    appId: "1:152086767625:web:f310fe9859d4ce5156b0d8"
  };

  const app = firebase.initializeApp(firebaseConfig)
  
  export function getFirestore(){
      return firebase.firestore(app)
  }