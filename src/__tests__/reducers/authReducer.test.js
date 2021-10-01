import authReducer from "../../reducers/authReducer";

describe('AuthReducer tests', () => {
  test('should return the same state', () => {
    const newState = authReducer(undefined, { type: 'WRONG_ACTION' });

    expect(newState).toEqual({});
  });

  test('should return {} when LOGOUT', () => {
    const state = {
      name: 'test',
      userId: '123',
    };
    const newState = authReducer(state, { type: 'LOGOUT' });

    expect(newState).toEqual({});
  });

  test('should return userInfo when LOGIN', () => {
    const userInfo = {
      name: 'test',
      userId: '123',
    };
    const newState = authReducer({}, { type: 'LOGIN', payload: userInfo });

    expect(newState).toEqual(userInfo);
  });
});
