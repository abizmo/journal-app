import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  updateProfile,
} from "firebase/auth";

import { auth, provider } from "../firebase";

export const onCurrentUserChanged = (cb) => onAuthStateChanged(auth, cb);
  
export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)

  return {
    name: user.displayName,
    userId: user.uid
  };
};

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then(({ user }) => ({
    name: user.displayName,
    userId: user.uid
}));

export const signOut = () => firebaseSignOut(auth);

export const signUpWithEmailAndPassword = ({
  email,
  name,
  password
}) => createUserWithEmailAndPassword(auth, email, password)
  .then(({ user }) => updateProfile(user, { displayName: name })
  .then(() => ({ name, userId: user.uid})));
