import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import newNote from '../../../actions/notes/newNote';
import { types } from '../../../actions/notes';
import { createNote } from '../../../api/notes';
import { error } from '../../../helpers/alert';
jest.mock('../../../api/notes');
jest.mock('../../../helpers/alert');
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares)

describe('newNote tests', () => {
  const id = '007';
  const userId = 'test007';
  const store = mockStore({
    auth: { userId },
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should call createNote', async () => {
    createNote.mockResolvedValue(id);
    await store.dispatch(newNote());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.ADD_NOTE,
      payload: {
        title: '',
        body: '',
        date: expect.anything(),
        id
      },
    });
    expect(createNote).toHaveBeenCalledWith(userId, expect.anything());
  });

  test('should call alert error', async () => {
    createNote.mockRejectedValue({ message: 'Error message' });
    await store.dispatch(newNote());

    expect(error).toHaveBeenCalled();
  });
});
