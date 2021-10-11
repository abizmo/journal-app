import { clearError, setError, startAction, stopAction, types } from "../../actions/ui";

describe('UI actions index tests', () => {
  describe('Types', () => {
    test('should match', () => {
      expect(types).toHaveProperty('CLEAR_ERROR');
      expect(types).toHaveProperty('SET_ERROR');
      expect(types).toHaveProperty('START_ACTION');
      expect(types).toHaveProperty('STOP_ACTION');
    });
  });

  describe('Actions', () => {
    test('should return the actions', () => {
      expect(clearError()).toEqual({ type: types.CLEAR_ERROR });
      expect(setError('Error message')).toEqual({
        type: types.SET_ERROR,
        payload: 'Error message'
      });
      expect(startAction()).toEqual({ type: types.START_ACTION });
      expect(stopAction()).toEqual({ type: types.STOP_ACTION });
    });
  })
});
