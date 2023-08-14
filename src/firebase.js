// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYJkSyG9EJxiYSRz59cWb13jnvDYsk3tA",
  authDomain: "emerald-build.firebaseapp.com",
  projectId: "emerald-build",
  storageBucket: "emerald-build.appspot.com",
  messagingSenderId: "501047544941",
  appId: "1:501047544941:web:08e98c6053cbd7e4360364",
  measurementId: "G-4C75KBD464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);