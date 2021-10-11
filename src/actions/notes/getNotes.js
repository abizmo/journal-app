import { SET_NOTES } from ".";
import { getAllNotes } from "../../api/notes";
import { error } from "../../helpers/alert";

export const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});

const getNotes = () => async (dispatch, getState) => {
  const { userId } = getState().auth;

  try {
    const notes = await getAllNotes(userId);

    return dispatch(setNotes(notes));
  } catch ({ message }) {
    error(message);
  }
};

export default getNotes;
