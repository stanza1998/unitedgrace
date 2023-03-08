// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGmAU-cJfW0AwdXZ8A_J9h0NIi4eTheA0",
  authDomain: "unitedgrace-2a977.firebaseapp.com",
  projectId: "unitedgrace-2a977",
  storageBucket: "unitedgrace-2a977.appspot.com",
  messagingSenderId: "376286581754",
  appId: "1:376286581754:web:834a53295460a01e920a43",
  measurementId: "G-S2NGJXLQ5J"
};



  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const st = getStorage(app);