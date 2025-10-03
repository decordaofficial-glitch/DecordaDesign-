// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUsw9ki-4CqmQIOBRvc91FkQhy6hAuX0A",
  authDomain: "decordadesign.firebaseapp.com",
  projectId: "decordadesign",
  storageBucket: "decordadesign.firebasestorage.app",
  messagingSenderId: "47395548581",
  appId: "1:47395548581:web:b9e87aa1ccb7fcdb924c4c",
  measurementId: "G-SDW3QR95XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);