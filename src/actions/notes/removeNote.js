import { DELETE_NOTE } from ".";
import { deleteOneNote } from "../../api/notes";
import { error } from "../../helpers/alert";

const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

const removeNote = () => (dispatch, getState) => {
  const { userId } = getState().auth;
  const { id } = getState().notes.active;

  deleteOneNote(userId, id)
    .then(() => {
      dispatch(deleteNote(id));
    })
    .catch(({ message }) => error(message));
};

export default removeNote;
