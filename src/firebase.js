// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFs_eiAECOlJZdw3OtuLNZM_5wB2XTcGM",
  authDomain: "auth-3931a.firebaseapp.com",
  projectId: "auth-3931a",
  storageBucket: "auth-3931a.appspot.com",
  messagingSenderId: "621160698697",
  appId: "1:621160698697:web:b5a8714b77bb471f260098",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
