import { ADD_NOTE, DELETE_NOTE, SET_ACTIVE, SET_NOTES, UPDATE_NOTE } from "../actions/notesActions";

const initialState = {
  notes: [],
  active: null,
};

const updateNote = (notes, { id, note }) => notes.map(n => n.id === id
  ? { ...note, id }
  : n
);

const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE:
      return { ...state, active: { ...payload } };
    
    case SET_NOTES:
      return { ...state, notes: [ ...payload ]};
    
    case UPDATE_NOTE:
      return {
        ...state,
        notes: updateNote(state.notes, payload)
      };

    default:
      return state;
  }
};

export default notesReducer;
