import { refreshNote } from ".";
import { updateNote } from "../../api/notes";
import { error, success } from "../../helpers/alert";

const saveNote = () => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const note = { ...getState().notes.active };
  const { id } = note;
  delete note.id;
  !note.url && delete note.url;

  try {
    await updateNote(userId, id, note);
    dispatch(refreshNote(id, note));
    success('Your note has been saved');
  } catch ({ message }) {
    error(message);
  }
}; 

export default saveNote;
