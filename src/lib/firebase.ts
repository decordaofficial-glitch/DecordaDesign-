// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSbsZgpZ5e2-2oY2e7oW6xG1BqYqL3e9kC-c",
  authDomain: "dev-project-362013.firebaseapp.com",
  projectId: "dev-project-362013",
  storageBucket: "dev-project-362013.appspot.com",
  messagingSenderId: "447152922129",
  appId: "1:447152922129:web:a62e32a67a05c117189a6a",
  measurementId: "G-4999NC2N6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// analytics is created here so it can be optionally used in other parts of the app
// if it is not used, it will be tree-shaken away
if (typeof window !== 'undefined') {
  try {
    const analytics = getAnalytics(app);
  } catch (error) {
    console.error('Failed to initialize Firebase Analytics', error);
  }
}
