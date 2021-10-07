import login from '../../../actions/auth/login';
import { LOGIN } from "../../../actions/auth";

describe('Login test', () => {
  test('should return the action', () => {
    const user = {
      userId: '0456',
      name: 'squid',
    };

    expect(login(user)).toEqual({
      type: LOGIN,
      payload: user,
    });
  });
});
