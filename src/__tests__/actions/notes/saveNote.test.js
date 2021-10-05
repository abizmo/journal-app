import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { refreshNote } from "../../../actions/notes";
import saveNote from "../../../actions/notes/saveNote";
import { updateNote } from "../../../api/notes";
import { error, success } from "../../../helpers/alert";
jest.mock('../../../api/notes');
jest.mock('../../../helpers/alert');

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('SaveNote tests', () => {
  const id = '007';
  const note = {
    title: 'New title',
    body: 'New Body',
    url: undefined,
  };
  const userId = 'test007';
  const store = mockStore({
    auth: { userId },
    notes: { active: { id, ...note }},
  });

  beforeEach(() => {
    jest.resetAllMocks();
    store.clearActions();
  });

  test('should dispatch refreshNote and call success', async () => {
    updateNote.mockResolvedValue();
    await store.dispatch(saveNote());
    const actions = store.getActions();

    expect(actions[0]).toEqual(refreshNote(id, note));
    expect(success).toHaveBeenCalledWith('Your note has been saved');
  });

  test('should call error', async () => {
    const message = 'Error message';
    updateNote.mockRejectedValue({ message });
    await store.dispatch(saveNote());

    expect(error).toHaveBeenCalledWith(message);
  });
});
