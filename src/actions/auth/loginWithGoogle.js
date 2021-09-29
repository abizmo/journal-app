import { login } from ".";

import { signInWithGoogle } from "../../api/auth";
import { error } from "../../helpers/alert";

const loginWithGoogle = () => (dispatch) => {
  signInWithGoogle()
    .then((user) => dispatch(login(user)))
    .catch(({ message }) => error(message));
};

export default loginWithGoogle;
