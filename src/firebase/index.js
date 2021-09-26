import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
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

// FIXME - db never used
const db = getFirestore();

// Authentication
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const loginWithGoogleProvider = () => signInWithPopup(auth, provider)
  .then(({ user }) => {
    const { displayName: name, uid: userId } = user;
    return { name, userId };
  });

export const signInWithEmail = ({ email, password }) => signInWithEmailAndPassword(auth, email, password)
  .then(({ user }) => {
    return { name: user.displayName, userId: user.uid };
  })

export const signUpWithEmailAndPassword = ({ email, name, password }) => createUserWithEmailAndPassword(auth, email, password)
  .then(({ user }) => {
    const { uid: userId } = user;
    return updateProfile(user, { displayName: name })
      .then(() => {
        return { name, userId}
      })
  })

  export const getCurrentUser = (cb) => onAuthStateChanged(auth, cb);
  
  export const signOutInFirebase = () => signOut(auth);
