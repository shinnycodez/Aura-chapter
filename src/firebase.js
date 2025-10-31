// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBqSd9QXRhz7CBIctDNWPdmA-Kc7XKdP3s",
  authDomain: "aura-chapter.firebaseapp.com",
  projectId: "aura-chapter",
  storageBucket: "aura-chapter.firebasestorage.app",
  messagingSenderId: "316809177145",
  appId: "1:316809177145:web:1dfd0282b89703cb2b85e8",
  measurementId: "G-DESE7YD2WQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };