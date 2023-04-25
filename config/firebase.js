// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5yBa8vBxaprltrDeyE-qeWWqGhmDykpQ",
  authDomain: "materialcartz.firebaseapp.com",
  projectId: "materialcartz",
  storageBucket: "materialcartz.appspot.com",
  messagingSenderId: "43073698375",
  appId: "1:43073698375:web:7778b9dd0619af71848f62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)