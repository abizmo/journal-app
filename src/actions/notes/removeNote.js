import { DELETE_NOTE } from ".";
import { deleteOneNote } from "../../api/notes";
import { error } from "../../helpers/alert";

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

const removeNote = () => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { id } = getState().notes.active;

  try {
    await deleteOneNote(userId, id);
    dispatch(deleteNote(id));
  } catch ({ message }) {
    error(message);
  }
};

export default removeNote;
