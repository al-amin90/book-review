// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiZMiEkzA2u2FNYywgXxN_4AsmmtGz1ps",
    authDomain: "book-review-4a1c3.firebaseapp.com",
    projectId: "book-review-4a1c3",
    storageBucket: "book-review-4a1c3.appspot.com",
    messagingSenderId: "238637077988",
    appId: "1:238637077988:web:ac43bcd259beb57051a3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
