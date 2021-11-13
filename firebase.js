import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyByDpAZLjVXLEzXG_rbEO1Bo9W7CpXLMGw",
    authDomain: "fb-clone-340a0.firebaseapp.com",
    projectId: "fb-clone-340a0",
    storageBucket: "fb-clone-340a0.appspot.com",
    messagingSenderId: "590077741379",
    appId: "1:590077741379:web:e99892cbe44406881c47f6"
  };
  const app = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {db,storage };