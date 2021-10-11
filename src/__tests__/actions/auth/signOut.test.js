import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { logout } from "../../../actions/auth";
import signOut from '../../../actions/auth/signOut';
import { clearNotes } from "../../../actions/notes";
import { signOut as signOutApi } from '../../../api/auth';
import { error } from "../../../helpers/alert";
jest.mock('../../../api/auth');
jest.mock('../../../helpers/alert');

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('actions/auth/signOut.js', () => {
  const store = mockStore({});

  test('should dispatch logout and clearNotes', async () => {
    signOutApi.mockResolvedValue();
    await store.dispatch(signOut());
    const [ actionLogout, actionClearNotes ] = store.getActions();

    expect(actionLogout).toEqual(logout());
    expect(actionClearNotes).toEqual(clearNotes());
  });

  test('should call error', async () => {
    const message = 'Error message';
    signOutApi.mockRejectedValue({ message });
    await store.dispatch(signOut());
    
    expect(error).toHaveBeenCalledWith(message);
  })
  
});
