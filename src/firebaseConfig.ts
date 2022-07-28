// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADWIwuZEHz5O1VeQWMLJFnqnapmaoJ6_Q",
  authDomain: "mosa-vid.firebaseapp.com",
  projectId: "mosa-vid",
  storageBucket: "mosa-vid.appspot.com",
  messagingSenderId: "441177041795",
  appId: "1:441177041795:web:ccaf45924a7bba564624b6",
  measurementId: "G-GQ6C3QE928",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
