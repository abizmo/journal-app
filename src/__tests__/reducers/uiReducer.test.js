import { types } from "../../actions/ui";
import uiReducer from "../../reducers/uiReducer";

describe('UIReducer tests', () => {
  test('should return the same state and error: null', () => {
    const state = {
      loading: false,
      error: 'Some error',
    };
    const newState = uiReducer(state, { type: types.CLEAR_ERROR });

    expect(newState).toEqual({
      loading: false,
      error: null,
    });
  });
  
  test('should return the same state and error: "Some error"', () => {
    const state = {
      loading: false,
      error: null,
    };
    const action = {
      type: types.SET_ERROR,
      payload: 'Some error',
    };
    const newState = uiReducer(state, action);

    expect(newState).toEqual({
      loading: false,
      error: 'Some error',
    });
  });
  
  test('should return loading: true', () => {
    const state = {
      loading: false,
      error: null,
    };
    const newState = uiReducer(state, { type: types.START_ACTION });

    expect(newState).toEqual({
      loading: true,
      error: null,
    });
  });

  
  test('should return loading: false', () => {
    const state = {
      loading: true,
      error: null,
    };
    const newState = uiReducer(state, { type: types.STOP_ACTION });

    expect(newState).toEqual({
      loading: false,
      error: null,
    });
  });
  
  test('should return state without modifications', () => {
    const newState = uiReducer(undefined, { type: 'WRONG_ERROR' });

    expect(newState).toEqual({
      loading: false,
      error: null,
    });
  });
})
