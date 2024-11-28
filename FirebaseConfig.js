
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKQxh8cfH2O-xsH1JNHlz9RhgdwgC2bzM",
  authDomain: "todo---list-884be.firebaseapp.com",
  projectId: "todo---list-884be",
  storageBucket: "todo---list-884be.firebasestorage.app",
  messagingSenderId: "178591131365",
  appId: "1:178591131365:web:eeb40db753abf2d4cd960c",
  measurementId: "G-2ESSFCFHZW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export { app, db };