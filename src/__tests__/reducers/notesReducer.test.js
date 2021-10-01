import { types } from '../../actions/notes';
import { notes } from '../../fixtures/notes';
import notesReducer from '../../reducers/notesReducer';

describe('NotesReducer tests', () => {
  const id = 1;
  const state = {
    notes,
    active: null,
  };
  
  test('should return initialState', () => {
    const newState = notesReducer(undefined, { type: 'WRONG_TYPE' });
    
    expect(newState).toEqual({
      notes: [],
      active: null,
    });
  });
  
  test('should add a note', () => {
    const newNote = {
      id: 99,
      title: 'Title 99',
      body: 'Body 99',
      url: 'XXXX',
    };
    const newState = notesReducer(state, {
      type: types.ADD_NOTE,
      payload: newNote,
    });

    expect(newState).toEqual({
      notes: notes.concat(newNote),
      active: newNote,
    });
  });
  
  test('should return emptyState', () => {
    const newState = notesReducer(state, {
      type: types.CLEAR_NOTES,
    });

    expect(newState).toEqual({
      notes: [],
      active: null,
    });
  });
  
  test('should delete a note', () => {
    const newState = notesReducer(state, {
      type: types.DELETE_NOTE,
      payload: id,
    });

    expect(newState).toEqual({
      notes: notes.slice(id),
      active: null,
    });
  });
  
  test('should change active note', () => {
    const newState = notesReducer(state, {
      type: types.SET_ACTIVE,
      payload: { ...notes[id]},
    });

    expect(newState).toEqual({
      notes,
      active: { ...notes[id] },
    });
  });
  
  test('should load notes', () => {
    const newState = notesReducer(undefined, {
      type: types.SET_NOTES,
      payload: notes,
    });

    expect(newState).toEqual(state);
  });
  
  test('should update a note', () => {
    const note = {
      title: 'Nuevo'
    };
    const action = {
      type: types.UPDATE_NOTE,
      payload: { id, note },
    };
    const newState = notesReducer(state, action);

    expect(newState.notes[id - 1]).toEqual({ id, ...note });
  });
});
