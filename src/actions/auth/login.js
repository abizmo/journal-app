import { LOGIN } from ".";

const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export default login;
