import { SET_ACTIVE } from ".";

const setActive = (note) => ({
  type: SET_ACTIVE,
  payload: note,
});

export default setActive;
