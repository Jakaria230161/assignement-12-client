// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    // apiKey: "AIzaSyC7gdzZBl6QWr02yGbLZo9lPQwoxrSCTeQ",
    // authDomain: "used-products-resale-clients.firebaseapp.com",
    // projectId: "used-products-resale-clients",
    // storageBucket: "used-products-resale-clients.appspot.com",
    // messagingSenderId: "101094930308",
    // appId: "1:101094930308:web:57354dd7d69ad2126e4fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;