import { types } from "../../../actions/auth";

describe('Auth actions index tests', () => {
  describe('Types', () => {
    test('should match', () => {
      expect(types).toHaveProperty('LOGIN');
      expect(types).toHaveProperty('LOGOUT');
    });
  });
});
