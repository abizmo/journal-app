import { login } from ".";

import { signUpWithEmailAndPassword } from "../../api/auth";
import { error } from "../../helpers/alert";

const signUp = (newUser) => (dispatch) => {
  signUpWithEmailAndPassword(newUser)
    .then((user) => dispatch(login(user)))
    .catch(({ message }) => error(message));
};

export default signUp;
