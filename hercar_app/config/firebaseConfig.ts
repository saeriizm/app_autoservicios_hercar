import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbny0-0mVf7OkckkYJ31XNTSgoBwgYXmg",
  authDomain: "hercarapp.firebaseapp.com",
  projectId: "hercarapp",
  storageBucket: "hercarapp.firebasestorage.app",
  messagingSenderId: "1052972163887",
  appId: "1:1052972163887:web:69a3a7181f9395c756b7da",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);