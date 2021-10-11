export { default as login } from './login';
export { default as loginWithEmail } from './loginWithEmail';
export { default as loginWithGoogle } from './loginWithGoogle';
export { default as logout } from './logout';
export { default as signOut } from './signOut';
export { default as signUp } from './signUp';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const types = {
  LOGIN,
  LOGOUT,
};
