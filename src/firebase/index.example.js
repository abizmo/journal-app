import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const testConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "000000000000",
  appId: "appId",
};

const prodConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "000000000000",
  appId: "appId",
};

const firebaseConfig = process.env.NODE_ENV === "test" ? testConfig : prodConfig;
// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore();

// Authentication
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
