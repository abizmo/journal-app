import { login } from ".";

import { signInWithGoogle } from "../../api/auth";
import { error } from "../../helpers/alert";

const loginWithGoogle = () => async (dispatch) => {
  try {
    const user = await signInWithGoogle();
    dispatch(login(user));
  } catch ({ message }) {
    error(message);
  }
};

export default loginWithGoogle;
