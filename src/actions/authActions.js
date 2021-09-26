import {
  loginWithGoogleProvider,
  signInWithEmail,
  signOutInFirebase,
  signUpWithEmailAndPassword
} from "../firebase";
import { startAction, stopAction } from "./uiActions";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginWithEmail = ({ email, password }) => (dispatch) => {
  dispatch(startAction());
  signInWithEmail({ email, password })
    .then((user) => {
      dispatch(stopAction());
      dispatch(login(user));
    })
    .catch((err) => {
      dispatch(stopAction());
      console.log(err.message);
    });
};

export const loginWithGoogle = () => (dispatch) => {
  loginWithGoogleProvider()
    .then((user) => dispatch(login(user)))
    .catch((err) => console.log(err));
};

export const signUp = (newUser) => (dispatch) => {
  signUpWithEmailAndPassword(newUser)
    .then((user) => dispatch(login(user)))
    .catch((err) => console.log(err.message))
};

export const signOut = () => (dispatch) => {
  signOutInFirebase()
    .then(() => dispatch(logout()))
    .catch((err) => console.log(err.message))
};
