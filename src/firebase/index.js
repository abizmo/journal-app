import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcsc_8N78COmEpYx762GWNscHeeq1Cq-w",
  authDomain: "react-0-expert.firebaseapp.com",
  projectId: "react-0-expert",
  storageBucket: "react-0-expert.appspot.com",
  messagingSenderId: "461439574680",
  appId: "1:461439574680:web:787bcc30a701bcb2c326ed"
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