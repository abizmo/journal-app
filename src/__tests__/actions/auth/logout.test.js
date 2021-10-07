import logout from '../../../actions/auth/logout';
import { LOGOUT  } from "../../../actions/auth";

describe('actions/auth/logout.js', () => {
  test('should return the logout action', () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
  });
});
