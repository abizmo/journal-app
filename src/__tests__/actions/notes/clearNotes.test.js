import { CLEAR_NOTES } from "../../../actions/notes"
import clearNotes from "../../../actions/notes/clearNotes";

describe('ClearNotes test', () => {
  test('should return the action', () => {
    expect(clearNotes()).toEqual({ type: CLEAR_NOTES });
  });
});
