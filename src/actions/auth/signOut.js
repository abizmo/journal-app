import { logout } from '.';

import { clearNotes } from '../notes';
import { signOut as signOutApi } from '../../api/auth';
import { error } from "../../helpers/alert";

const signOut = () => async (dispatch) => {
  try {
    await signOutApi()
    dispatch(logout());
    dispatch(clearNotes());
  } catch ({ message }) {
    error(message);
  }
};

export default signOut;
