import { ADD_NOTE, DELETE_NOTE, SET_ACTIVE, SET_NOTES, UPDATE_NOTE } from "../actions/notesActions";

const initialState = {
  notes: [],
  active: null,
};

const updateNote = (notes, { id, note }) => notes.map(n => n.id === id
  ? { ...note, id }
  : n
);

const deleteNote = (notes, id) => notes.filter(n => n.id !== id);

const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NOTE:
      return {
        notes: [...state.notes, payload],
        active: payload,
      };

    case DELETE_NOTE:
      return {
        notes: deleteNote(state.notes, payload),
        active: null,
      };

    case SET_ACTIVE:
      return { ...state, active: { ...payload } };
    
    case SET_NOTES:
      return { ...state, notes: [ ...payload ]};
    
    case UPDATE_NOTE:
      return {
        ...state,
        notes: updateNote(state.notes, payload),
      };

    default:
      return state;
  }
};

export default notesReducer;
