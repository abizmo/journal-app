import { ADD_NOTE } from ".";
import { createNote } from "../../api/notes";
import { error } from "../../helpers/alert";

const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

const newNote = () => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const note = {
    title: '',
    body: '',
    date: new Date().getTime(),
  };

  try {
    const id = await createNote(userId, note)
    dispatch(addNote({ ...note, id }))
  }
  catch ({message}){
    error(message);
  }
};

export default newNote;
