// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaLjcfsjQ42BZUGeeFDuVJ46IOWkCirsI",
  authDomain: "liva-756a0.firebaseapp.com",
  projectId: "liva-756a0",
  storageBucket: "liva-756a0.appspot.com",
  messagingSenderId: "258151414059",
  appId: "1:258151414059:web:92e6b3083f49cb3743ad6e",
  measurementId: "G-RMBFXS6R2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);