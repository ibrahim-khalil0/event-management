// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rtF324TCDSgmdJhtt_rGQEiBjf4pBOE",
  authDomain: "event-management-d7d8a.firebaseapp.com",
  projectId: "event-management-d7d8a",
  storageBucket: "event-management-d7d8a.appspot.com",
  messagingSenderId: "530624778839",
  appId: "1:530624778839:web:5c3230d4546b7d62ce8912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth