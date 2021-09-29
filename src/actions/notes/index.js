//TODO - faltan algunas alertas, de exito y de loading
export const ADD_NOTE = 'ADD_NOTE';
export const CLEAR_NOTES = 'CLEAR_NOTES'
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_ACTIVE = 'SET_ACTIVE';
export const SET_NOTES = 'SET_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export { default as setActive } from './setActive';
export { default as refreshNote } from './refreshNote';
export { default as clearNotes } from './clearNotes';
export { default as getNotes } from './getNotes';
export { default as uploadImage } from './uploadImage';
export { default as removeNote } from './removeNote';
export { default as newNote } from './newNote';
export { default as saveNote } from './saveNote';