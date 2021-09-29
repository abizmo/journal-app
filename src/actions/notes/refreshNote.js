import { UPDATE_NOTE } from ".";

const refreshNote = (id, note) => ({
  type: UPDATE_NOTE,
  payload: {
    id,
    note,
  }
});

export default refreshNote;
