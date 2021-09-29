import { refreshNote } from ".";
import { uploadOneImage } from "../../api/images";
import { updateNote } from "../../api/notes";
import { error, success } from "../../helpers/alert";

const uploadImage = (file) => (dispatch, getState) => {
  const { userId } = getState().auth;
  const note = { ...getState().notes };
  const { id } = note;
  delete note.id;

  uploadOneImage(file)
    .then((url) => updateNote(userId, id, { url }))
    .then(({ url }) => {
      dispatch(refreshNote(id, { ...note, url }));
      success('Your image has been saved');
    })
    .catch(({ message }) => error(message));
};

export default uploadImage;
