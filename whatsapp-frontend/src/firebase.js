import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGhM-l8cvnxx2U4B5tDwqdATQtR_5FaQQ",
    authDomain: "whatsapp-mern-86d4a.firebaseapp.com",
    projectId: "whatsapp-mern-86d4a",
    storageBucket: "whatsapp-mern-86d4a.appspot.com",
    messagingSenderId: "205776399999",
    appId: "1:205776399999:web:5f603dafd81eee1c4c994a"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();

  // const db = app.firestore();
  // const auth = app.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();


  // export {db, auth, provider};