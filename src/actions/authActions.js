import { loginWithGoogleProvider } from "../firebase";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const loginWithEmailAndPassword = ({ email, password }) => (dispatch) => {
  setTimeout(() => {
    dispatch(login({ name: 'goccita', userId: 12345 }));
  }, 3000);
}

export const loginWithGoogle = () => (dispatch) => {
  loginWithGoogleProvider()
    .then((user) => {
      dispatch(login(user));
    })
    .catch((err) => console.log(err))
}