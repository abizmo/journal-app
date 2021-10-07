import { login } from ".";

import { startAction, stopAction } from "../ui";
import { signIn } from "../../api/auth";
import { error } from "../../helpers/alert";

const loginWithEmail = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(startAction());
    const user = await signIn({ email, password });
    dispatch(login(user));
  } catch ({ message }) {
    error(message);
  }
  dispatch(stopAction());
};

export default loginWithEmail;
