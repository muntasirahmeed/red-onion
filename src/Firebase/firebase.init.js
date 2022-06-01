// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5SHIMq7YFnx1WBeImcRf3ErRRWCSJms",
  authDomain: "red-onion-clone-bc954.firebaseapp.com",
  projectId: "red-onion-clone-bc954",
  storageBucket: "red-onion-clone-bc954.appspot.com",
  messagingSenderId: "1028153684521",
  appId: "1:1028153684521:web:9931a2c6f245bc6c716238",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
