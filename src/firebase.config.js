// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzP50NC5VhsRn8HnHTt8qKGKY5H0B3rPc",
  authDomain: "inventory-management-sys-cd755.firebaseapp.com",
  projectId: "inventory-management-sys-cd755",
  storageBucket: "inventory-management-sys-cd755.appspot.com",
  messagingSenderId: "896069844895",
  appId: "1:896069844895:web:07435f20ca72d9f24047aa",
  measurementId: "G-24KZJC99N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);