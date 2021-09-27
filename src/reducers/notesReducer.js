import { SET_ACTIVE, SET_NOTES } from "../actions/notesActions";

const initialState = {
  notes: [],
  active: null,
};

const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE:
      return { ...state, active: { ...payload } };
    
    case SET_NOTES:
      return { ...state, notes: [ ...payload ]};

    default:
      return state;
  }
};

export default notesReducer;
