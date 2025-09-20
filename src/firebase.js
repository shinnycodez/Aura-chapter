// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyA3uaC0cweBC6casyDnkgH0vZd01IknAAQ",
  authDomain: "jemzi-6adda.firebaseapp.com",
  projectId: "jemzi-6adda",
  storageBucket: "jemzi-6adda.firebasestorage.app",
  messagingSenderId: "838522991952",
  appId: "1:838522991952:web:05ab4ab0b8217cb9c5e855",
  measurementId: "G-4NDDR09DG7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };