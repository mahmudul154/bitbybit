// src/lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey:"AIzaSyDBU0Jr5QPFSlx8GL5_P70w_dKI3Qcisyo",
  authDomain: "bitbybit-125ee.firebaseapp.com",
  projectId: "bitbybit-125ee",
  storageBucket: "bitbybit-125ee.firebasestorage.app",
  messagingSenderId: "936483093657",
  appId:  "1:936483093657:web:78a483119e1dfd31f0cc08",
  measurementId: "G-QNGM270CQC"
};


// --- THIS IS THE FIX ---
// This pattern prevents re-initializing the app on hot reloads in development.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize and export Firebase services
export const auth = getAuth(app);
export const storage = getStorage(app);