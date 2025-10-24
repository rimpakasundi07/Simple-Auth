// DO NOT SHARE CONFIG
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmvTuyU0y44i3rYr7cwsayKiYvvV4axjI",
  authDomain: "simple-auth-d8688.firebaseapp.com",
  projectId: "simple-auth-d8688",
  storageBucket: "simple-auth-d8688.firebasestorage.app",
  messagingSenderId: "783063275231",
  appId: "1:783063275231:web:82848df122949abc12fb6a",
  measurementId: "G-5ZH0V8W5C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
