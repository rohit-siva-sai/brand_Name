// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD5yBa8vBxaprltrDeyE-qeWWqGhmDykpQ",
//   authDomain: "materialcartz.firebaseapp.com",
//   projectId: "materialcartz",
//   storageBucket: "materialcartz.appspot.com",
//   messagingSenderId: "43073698375",
//   appId: "1:43073698375:web:7778b9dd0619af71848f62"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)


// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDUWZi_dn_nVltleHqhv3htK-QRpw7M6o",
  authDomain: "brandname-7d48f.firebaseapp.com",
  projectId: "brandname-7d48f",
  storageBucket: "brandname-7d48f.appspot.com",
  messagingSenderId: "203759256588",
  appId: "1:203759256588:web:cc55cba54ebeaca88a1a29",
  measurementId: "G-3YYQGG1WE3"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig)

export const db = getFirestore(app)
// export const auth = getAuth(app)
// const analytics = getAnalytics(app);