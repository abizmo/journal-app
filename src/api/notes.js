import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const createNote = (userId, note) => addDoc(collection(db, `${userId}/journal/notes/`), note)
  .then(({ id }) => id);

export const getAllNotes = (userId) => getDocs(collection(db, `${userId}/journal/notes/`))
  .then((res) => {
    const notes = [];
    res.forEach((doc) => {
      notes.push({ ...doc.data(), id: doc.id });
    });
    
    return notes;
});

export const updateNote = (userId, noteId, data) => {
  const docRef = doc(db, `${userId}/journal/notes/${noteId}`);

  return updateDoc(docRef, data)
    .then(() => data);
};