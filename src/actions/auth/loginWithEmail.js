import { login } from ".";

import { startAction, stopAction } from "../ui";
import { signIn } from "../../api/auth";
import { error } from "../../helpers/alert";

const loginWithEmail = ({ email, password }) => (dispatch) => {
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

export default loginWithEmail;
