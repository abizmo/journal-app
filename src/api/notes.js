import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

export const createNote = async (userId, note) => {
  const { id } = await addDoc(collection(db, `${userId}/journal/notes/`), note);

  return id;
}

export const getAllNotes = async (userId) => {
  const notes = [];
  const res = await getDocs(collection(db, `${userId}/journal/notes`));
  res.forEach((doc) => {
    notes.push({ ...doc.data(), id: doc.id });
  });
    
  return notes;
};

export const updateNote = async (userId, noteId, data) => {
  const docRef = doc(db, `${userId}/journal/notes/${noteId}`);
  await updateDoc(docRef, data)

  return data;
};

export const deleteOneNote = (userId, noteId) => deleteDoc(doc(db, `${userId}/journal/notes/${noteId}`));
