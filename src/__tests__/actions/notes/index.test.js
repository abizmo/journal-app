import { types } from "../../../actions/notes";

describe('Notes actions index tests', () => {
  describe('Types', () => {
    test('should match', () => {
      expect(types).toHaveProperty('ADD_NOTE');
      expect(types).toHaveProperty('CLEAR_NOTES');
      expect(types).toHaveProperty('DELETE_NOTE');
      expect(types).toHaveProperty('SET_ACTIVE');
      expect(types).toHaveProperty('SET_NOTES');
      expect(types).toHaveProperty('UPDATE_NOTE');
    });
  });
});
