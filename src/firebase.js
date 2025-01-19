// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC89-lXCfZzEDw0WvpQrt5svg7ezc2b0RY",
  authDomain: "itlala-d3975.firebaseapp.com",
  projectId: "itlala-d3975",
  storageBucket: "itlala-d3975.firebasestorage.app",
  messagingSenderId: "432092775574",
  appId: "1:432092775574:web:d8bb8377cfe40c4a6b2eb7",
  measurementId: "G-MF9E3V2F3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };