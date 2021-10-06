/**
 * @jest-environment node
 */
import { collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import { createNote, getAllNotes, updateNote } from "../../api/notes"
import { db } from "../../firebase";

describe('Notes api tests', () => {
  const note = {
    title: 'Test title',
    body: 'Test body',
    date: new Date().getTime(),
  };
  const userId = 'test007';

  describe('createNote and deleteOneNote', () => {
    test('should return an id', async () => {
      const id = await createNote(userId, note);

      expect(typeof id).toBe('string');

      await deleteDoc(doc(db, `${userId}/journal/notes/${id}`));
    });
  });

  describe('getAllNotes', () => {
    test('should return an array of notes', async () => {
      const notes = await getAllNotes(userId);

      expect(notes).toBeInstanceOf(Array);
      expect(notes).toHaveLength(6)
    });
  });

  describe('updateNote', () => {
    test('should return the data sent', async () => {
      const id = 'x9Bsbhzyz1lfCkuLGu3B';
      const data = {
        title: `title updated at ${new Date().getTime()}`,
      }
      const received = await updateNote(userId, id, data);

      expect(received).toEqual(data);
    })
    
  })
  
});
