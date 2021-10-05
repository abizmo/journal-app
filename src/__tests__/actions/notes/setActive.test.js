import { types } from "../../../actions/notes"
import setActive from '../../../actions/notes/setActive'

describe('SetActive tests', () => {
  test('should return the action with payload', () => {
    const note = {
      id: '007',
      title: 'New Title',
      body: 'New body',
    };
    expect(setActive(note)).toEqual({
      type: types.SET_ACTIVE,
      payload: note,
    });
  });
});
