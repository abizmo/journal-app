import Swal from "sweetalert2";
import { createNote, getAllNotes, saveOneNote } from "../api/notes";

export const SET_ACTIVE = 'SET_ACTIVE';
export const SET_NOTES = 'SET_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const getNotes = () => (dispatch, getState) => {
  const { userId } = getState().auth;

  getAllNotes(userId)
    .then((notes) => {
      dispatch(setNotes(notes));
    })
    .catch(({ message }) => Swal.fire('Error', message, 'error'));
};

export const newNote = () => (dispatch, getState) => {
  const { userId } = getState().auth;

  const note = {
    title: '',
    body: '',
    date: new Date().getTime(),
  };

  createNote(userId, note)
    .then((id) => {
      dispatch(setActive({
        ...note,
        id,
      }));
    })
    .catch(({ message }) => Swal.fire('Error', message, 'error'));
};

export const setActive = (note) => ({
  type: SET_ACTIVE,
  payload: note,
});

const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});

export const saveNote = () => (dispatch, getState) => {
  const { userId } = getState().auth;
  const { active: note } = getState().notes;
  const { id } = note;
  delete note.id;
  !note.url && delete note.url;

  saveOneNote(userId, id, note)
    .then(() => {
      dispatch(refreshNote(id, note));
      Swal.fire({
        icon: 'success',
        title: 'Your note has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(({ message }) => Swal.fire('Error', message, 'error'));
} 
 
const refreshNote = (id, note) => ({
  type: UPDATE_NOTE,
  payload: {
    id,
    note,
  }
});