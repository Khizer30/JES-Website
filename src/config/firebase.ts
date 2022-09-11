import { initializeApp, FirebaseApp } from "firebase/app" ;
import { getFirestore, Firestore } from "firebase/firestore" ;

const firebaseConfig: object = 
{
  apiKey: "AIzaSyCkIxD2wsTp46CtkCy_CwcCgobI59NhyMg",
  authDomain: "jes-website-786.firebaseapp.com",
  projectId: "jes-website-786",
  storageBucket: "jes-website-786.appspot.com",
  messagingSenderId: "297622745981",
  appId: "1:297622745981:web:4920486e4f042c5bfed214"
} ;

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig) ;

// Initialize Firestore
const db: Firestore = getFirestore(app) ;

// Export Firestore
export default db ;