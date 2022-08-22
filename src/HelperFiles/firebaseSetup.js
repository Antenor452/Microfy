// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGe5FtJ_83iYuLhVTRsRPz_weY20smHxc",
  authDomain: "microfy-f49a1.firebaseapp.com",
  projectId: "microfy-f49a1",
  storageBucket: "microfy-f49a1.appspot.com",
  messagingSenderId: "452598260301",
  appId: "1:452598260301:web:ea240bc33a910432d0f204",
  measurementId: "G-XTMKJTJWHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
