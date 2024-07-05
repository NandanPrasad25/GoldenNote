/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore, query, getDocs, collection, where, addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDcKgYnTg9ubL2ioa-UsNScQIxHXySprQ",
  authDomain: "goldennotes-1acba.firebaseapp.com",
  projectId: "goldennotes-1acba",
  storageBucket: "goldennotes-1acba.appspot.com",
  messagingSenderId: "275840477841",
  appId: "1:275840477841:web:ed729c041a90792c1aed30",
  measurementId: "G-N3KN4N7L5S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
