import { logout } from '.';

import { clearNotes } from '../notes';
import { signOut as signOutApi } from '../../api/auth';
import { error } from "../../helpers/alert";

const signOut = () => (dispatch) => {
  signOutApi()
    .then(() => {
      dispatch(logout());
      dispatch(clearNotes());
    })
    .catch(({ message }) => error(message));
};

export default signOut;
