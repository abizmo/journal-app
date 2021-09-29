import {
  signIn,
  signInWithGoogle,
  signUpWithEmailAndPassword,
  signOut as signOutApi
} from "../api/auth";
import { error } from "../helpers/alert";
import { clearNotes } from "./notes";
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
  signIn({ email, password })
    .then((user) => {
      dispatch(stopAction());
      dispatch(login(user));
    })
    .catch(({ message }) => {
      dispatch(stopAction());
      error(message);
    });
};

export const loginWithGoogle = () => (dispatch) => {
  signInWithGoogle()
    .then((user) => dispatch(login(user)))
    .catch(({ message }) => error(message));
};

export const signUp = (newUser) => (dispatch) => {
  signUpWithEmailAndPassword(newUser)
    .then((user) => dispatch(login(user)))
    .catch(({ message }) => error(message));
};

export const signOut = () => (dispatch) => {
  signOutApi()
    .then(() => {
      dispatch(logout());
      dispatch(clearNotes());
    })
    .catch(({ message }) => error(message));
};
