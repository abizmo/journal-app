import { CLEAR_ERROR, SET_ERROR, START_ACTION, STOP_ACTION } from "../actions/uiActions";

const initialState = {
  loading: false,
  error: null,
};

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_ERROR:
      return { ...state, error: null };

    case SET_ERROR:
      return { ...state, error: payload };

    case START_ACTION:
      return { ...state, loading: true };

    case STOP_ACTION:
      return { ...state, loading: false };

    default:
      return state;
    }
};

export default uiReducer;
