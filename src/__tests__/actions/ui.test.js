import { types } from "../../actions/ui";

describe('UI actions index tests', () => {
  describe('Types', () => {
    test('should match', () => {
      expect(types).toHaveProperty('CLEAR_ERROR');
      expect(types).toHaveProperty('SET_ERROR');
      expect(types).toHaveProperty('START_ACTION');
      expect(types).toHaveProperty('STOP_ACTION');
    });
  });
});
