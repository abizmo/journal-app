import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.appspot.com",
  messagingSenderId: "***REMOVED***",
  appId: "1:***REMOVED***:web:787bcc30a701bcb2c326ed"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();
const provider = new GoogleAuthProvider();
export const loginWithGoogleProvider = () => signInWithPopup(auth, provider)
  .then((res) => {
    const { displayName: name, uid: userId } = res.user;
    return { name, userId };
  });