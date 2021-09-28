//TODO - faltan algunas alertas, de exito y de loading
//TODO - crear un helper para las alertas
//TODO - separar las acciones en ficheros
import Swal from "sweetalert2";
import { uploadOneImage } from "../api/images";
import { createNote, deleteOneNote, getAllNotes, updateNote } from "../api/notes";

export const ADD_NOTE = 'ADD_NOTE';
export const CLEAR_NOTES = 'CLEAR_NOTES'
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_ACTIVE = 'SET_ACTIVE';
export const SET_NOTES = 'SET_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';

const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const clearNotes = () => ({
  type: CLEAR_NOTES,
});

const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

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
      dispatch(addNote({ ...note, id }))
    })
    .catch(({ message }) => Swal.fire('Error', message, 'error'));
};

const refreshNote = (id, note) => ({
  type: UPDATE_NOTE,
  payload: {
    id,
    note,
  }
});

export const removeNote = () => (dispatch, getState) => {
const { userId } = getState().auth;
const { id } = getState().notes.active;

deleteOneNote(userId, id)
  .then(() => {
    dispatch(deleteNote(id));
  })
  .catch(({ message }) => Swal.fire('Error', message, 'error'));
};

export const saveNote = () => (dispatch, getState) => {
  const { userId } = getState().auth;
  const { active: note } = getState().notes;
  const { id } = note;
  delete note.id;
  !note.url && delete note.url;

  updateNote(userId, id, note)
    .then(() => {
      dispatch(refreshNote(id, note));
      Swal.fire({
        icon: 'success',
        title: 'Your note has been saved',
        showConfirmButton: false,
        timer: 1500,
      })
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

export const uploadImage = (file) => (dispatch, getState) => {
  const { userId } = getState().auth;
  const { active: note } = getState().notes;
  const { id } = note;
  delete note.id;

  uploadOneImage(file)
    .then((url) => updateNote(userId, id, { url }))
    .then(({ url }) => {
      dispatch(refreshNote(id, { ...note, url }));
      Swal.fire({
        icon: 'success',
        title: 'Your image has been saved',
        showConfirmButton: false,
        timer: 1500,
      })
    })
    .catch(({ message }) => Swal.fire('Error', message, 'error'));
}
