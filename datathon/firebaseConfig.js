// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuLFeDCDvQsgb8dJxoJDvDWVKvYhWp3lI",
  authDomain: "adyayan-82c93.firebaseapp.com",
  projectId: "adyayan-82c93",
  storageBucket: "adyayan-82c93.appspot.com",
  messagingSenderId: "375038943916",
  appId: "1:375038943916:web:1b8ae9198032edfbc53509",
  measurementId: "G-W55J6YF494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
