import { login } from ".";

import { signUpWithEmailAndPassword } from "../../api/auth";
import { error } from "../../helpers/alert";

const signUp = (newUser) => async (dispatch) => {
  try {
    const user = await signUpWithEmailAndPassword(newUser);
    dispatch(login(user));
  } catch ({ message }) {
    error(message);
  }
};

export default signUp;
