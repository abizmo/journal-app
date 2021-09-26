import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile
} from "firebase/auth";
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
  
