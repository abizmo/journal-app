import { SET_NOTES } from ".";
import { getAllNotes } from "../../api/notes";
import { error } from "../../helpers/alert";

const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});

const getNotes = () => (dispatch, getState) => {
  const { userId } = getState().auth;

  getAllNotes(userId)
    .then((notes) => {
      dispatch(setNotes(notes));
    })
    .catch(({ message }) => error(message));
};

export default getNotes;
