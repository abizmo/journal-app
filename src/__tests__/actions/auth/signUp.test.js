import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { login } from '../../../actions/auth';
import signUp from '../../../actions/auth/signUp';
import { signUpWithEmailAndPassword } from '../../../api/auth';
import { error } from '../../../helpers/alert';
jest.mock('../../../api/auth');
jest.mock('../../../helpers/alert');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('action/auth/signUp.js', () => {
  const store = mockStore({});
  const user = {
    name: 'squid',
    email: 'squid@game.com',
  };

  test('should dispatch login', async () => {
    signUpWithEmailAndPassword.mockResolvedValue(user);
    await store.dispatch(signUp(user));
    const [action] = store.getActions();

    expect(action).toEqual(login(user));
  });

  test('should call error', async () => {
    const message = 'Error message';
    signUpWithEmailAndPassword.mockRejectedValue({ message });
    await store.dispatch(signUp(user));

    expect(error).toHaveBeenCalledWith(message);
  });
});
