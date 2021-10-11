import { refreshNote } from ".";
import { uploadOneImage } from "../../api/images";
import { updateNote } from "../../api/notes";
import { error, success } from "../../helpers/alert";

const uploadImage = (file) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const note = { ...getState().notes.active };
  const { id } = note;
  delete note.id;

  try {
    const url = await uploadOneImage(file);
    await updateNote(userId, id, { url });
    dispatch(refreshNote(id, { ...note, url }))
    success('Your image has been saved');
  } catch ({ message }) {
    error(message);
  }
};

export default uploadImage;
