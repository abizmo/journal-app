import { types } from "../../../actions/notes"
import refreshNote from '../../../actions/notes/refreshNote'

describe('RefreshNote tests', () => {
  test('should return the action with payload', () => {
    const id = '007';
    const note = {
      title: 'New Title',
      body: 'New body',
    };
    expect(refreshNote(id, note)).toEqual({
      type: types.UPDATE_NOTE,
      payload: {
        id,
        note,
      },
    });
  });
});
