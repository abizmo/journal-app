import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login, loginWithGoogle } from "../../../actions/auth";
import { signInWithGoogle } from "../../../api/auth";
import { error } from "../../../helpers/alert";
jest.mock('../../../api/auth');
jest.mock('../../../helpers/alert');


const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('actions/auth/loginWithGoogle.js', () => {
  const store = mockStore({});

  test('should dispatch login', async () => {
    const user = {
      userId: '0456',
      name: 'Seong Gi-Hun',
    };
    signInWithGoogle.mockResolvedValue(user);
    await store.dispatch(loginWithGoogle());
    const [ action ] = store.getActions();

    expect(action).toEqual(login(user));
  });
  
  test('should call error', async () => {
    const message = 'Error message';
    signInWithGoogle.mockRejectedValue({ message });
    await store.dispatch(loginWithGoogle());

    expect(error).toHaveBeenCalledWith(message);
  });
});
