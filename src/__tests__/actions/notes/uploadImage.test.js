import { readFileSync } from 'fs'
import path from 'path';
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { refreshNote } from "../../../actions/notes";
import uploadImage from "../../../actions/notes/uploadImage";
import { uploadOneImage } from "../../../api/images";
import { updateNote } from "../../../api/notes";
import { error, success } from "../../../helpers/alert";
jest.mock('../../../api/images');
jest.mock('../../../api/notes');
jest.mock('../../../helpers/alert');

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('UploadImage tests', () => {
  const img = readFileSync(path.join(__dirname,'../../../fixtures/images','001.jpeg'))
  const file = new File([img], '001.jpeg');
  const id = '007';
  const note = {
    title: 'New title',
    body: 'New body',
  };
  const userId = 'test007';
  const store = mockStore({
    auth: { userId },
    notes: { active: { id, ...note }},
  });

  beforeEach(() => {
    jest.resetAllMocks();
    store.clearActions()
  });

  test('should dispatch resfresNote, call success and call updateNote', async () => {
    const url = 'http://localhost:3000/image.png';
    uploadOneImage.mockResolvedValue(url);
    updateNote.mockResolvedValue({ url });
    await store.dispatch(uploadImage(file));

    const actions = store.getActions();
    expect(actions[0]).toEqual(refreshNote(id, { ...note, url }));
    expect(updateNote).toBeCalledWith(userId, id, { url });
    expect(success).toBeCalledWith('Your image has been saved');
  });
  
  test('should call error', async () => {
    const message = 'Error message';
    uploadOneImage.mockRejectedValue({ message });
    await store.dispatch(uploadImage(file));

    expect(error).toBeCalledWith(message);
  });
});
