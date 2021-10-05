import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { types } from "../../../actions/notes"
import removeNote, { deleteNote } from '../../../actions/notes/removeNote';
import { deleteOneNote } from "../../../api/notes";
import { error } from "../../../helpers/alert";
jest.mock('../../../api/notes');
jest.mock('../../../helpers/alert');

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('RemoveNote tests', () => {
  describe('DeleteNote tests', () => {
    test('should return the action with payload', () => {
      const id = '007';

      expect(deleteNote(id)).toEqual({
        type: types.DELETE_NOTE,
        payload: id,
      });
    });
  });
  describe('removeNote tests', () => {
    const id = '007';
    const userId = 'test007';
    const store = mockStore({
      auth: { userId },
      notes: { active: { id }},
    });

    beforeEach(() => {
      store.clearActions();
      jest.resetAllMocks();
    });

    test('should dispatch deleteNote', async () => {
      deleteOneNote.mockResolvedValue();
      await store.dispatch(removeNote());
      const actions = store.getActions();

      expect(actions[0]).toEqual(deleteNote(id))
    });
    
    test('should call error', async () => {
      const message = 'Error message';
      deleteOneNote.mockRejectedValue({ message });
      await store.dispatch(removeNote());

      expect(error).toHaveBeenCalled();
    });
  });
});
