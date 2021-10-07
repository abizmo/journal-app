import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login } from "../../../actions/auth";
import loginWithEmail from "../../../actions/auth/loginWithEmail";
import { startAction, stopAction } from "../../../actions/ui";
import { signIn } from "../../../api/auth";
import { error } from "../../../helpers/alert";
jest.mock('../../../api/auth');
jest.mock('../../../helpers/alert');

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('actions/auth/loginWithEmail.js', () => {
  const email = 'test@test.com';
  const password = '1234';
  const store = mockStore({});

  beforeEach(() => {
    jest.resetAllMocks();
    store.clearActions();
  });

  test('should dispatch startAction, stopAction, login', async () => {
    const user = {
      userId: '0456',
      name: 'userTest',
    };
    signIn.mockResolvedValue(user);
    await store.dispatch(loginWithEmail({ email, password }));
    const [actionStart, actionLogin, actionStop] = store.getActions();

    expect(actionStart).toEqual(startAction());
    expect(actionLogin).toEqual(login(user));
    expect(actionStop).toEqual(stopAction());
  });

  test('should dispatch startAction and stopAction and call error', async () => {
    const message = 'Error message';
    signIn.mockRejectedValue({ message });
    await store.dispatch(loginWithEmail({ email, password }));
    const [actionStart, actionStop] = store.getActions();

    expect(error).toHaveBeenCalledWith(message);
    expect(actionStart).toEqual(startAction());
    expect(actionStop).toEqual(stopAction());
  });
});
