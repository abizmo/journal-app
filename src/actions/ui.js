export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_ERROR = 'SET_ERROR';
export const START_ACTION = 'START_ACTION';
export const STOP_ACTION = 'STOP_ACTION';

export const types = {
  CLEAR_ERROR,
  SET_ERROR,
  START_ACTION,
  STOP_ACTION,
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setError = (msgError) => ({
  type: SET_ERROR,
  payload: msgError,
});

export const startAction = () => ({
  type: START_ACTION,
});

export const stopAction = () => ({
  type: STOP_ACTION,
});
