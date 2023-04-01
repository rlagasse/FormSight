// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import "firebase/firestore";

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp ({  
  apiKey: "AIzaSyAPGeuwvbcl6UD3RdR5f6xf8k6eppF8NoU",
  authDomain: "team-15-485b6.firebaseapp.com",
  projectId: "team-15-485b6",
  storageBucket: "team-15-485b6.appspot.com",
  messagingSenderId: "166979220823",
  appId: "1:166979220823:web:06dcd97fea91b1819a3a12"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const fireDB = app.firestore();
export default app;


