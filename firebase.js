import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD0mNsDiDm6l9RIpC4VOa6x2PT1--Eiyv4",
  authDomain: "church-of-pensa.firebaseapp.com",
  databaseURL: "https://church-of-pensa-default-rtdb.firebaseio.com",
  projectId: "church-of-pensa",
  storageBucket: "church-of-pensa.firebasestorage.app",
  messagingSenderId: "144414809729",
  appId: "1:144414809729:web:8b5744b1d7074ce7d1b780",
  measurementId: "G-QR4R9BM52X",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
