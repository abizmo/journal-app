import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.appspot.com",
  messagingSenderId: "***REMOVED***",
  appId: "1:***REMOVED***:web:787bcc30a701bcb2c326ed",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore();

// Authentication
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
