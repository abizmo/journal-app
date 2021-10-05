import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
 
import { SET_NOTES } from "../../../actions/notes";
import getNotes, { setNotes } from "../../../actions/notes/getNotes";
import { getAllNotes } from '../../../api/notes';
import notes from '../../../fixtures/notes';
import { error } from '../../../helpers/alert';
jest.mock('../../../api/notes');
jest.mock('../../../helpers/alert');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('GetNotes tests', () => {
  describe('setNotes test', () => {
    test('should return the action', () => {
      expect(setNotes()).toEqual({ type: SET_NOTES, payload: notes })
    });
  });
  
  describe('getNotes', () => {
    const userId = '007';
    const store = mockStore({
      auth: {
        userId,
      },
    });

    beforeEach(() => {
      store.clearActions();
      jest.resetAllMocks();
    });

    test('should dispatch setNotes', async () => {
      getAllNotes.mockResolvedValue(notes);
      await store.dispatch(getNotes());
      const actions = store.getActions();
      
      expect(actions[0]).toEqual(setNotes(notes));
    });

    test('should call error', async () => {
      const message = 'Error message';
      getAllNotes.mockRejectedValue({ message });
      await store.dispatch(getNotes());
      
      expect(error).toHaveBeenCalled();
    });
  });
});
