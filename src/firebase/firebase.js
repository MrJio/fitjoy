// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZl__zKW1xPQTfPYWu140Ndsy0Uf55wE0",
  authDomain: "jb-fitjoy.firebaseapp.com",
  projectId: "jb-fitjoy",
  storageBucket: "jb-fitjoy.appspot.com",
  messagingSenderId: "192155495435",
  appId: "1:192155495435:web:dc2f2cffd96d912b0b2b0e",
  measurementId: "G-YRNV80SSC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app, auth};