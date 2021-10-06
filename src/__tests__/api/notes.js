import { deleteDoc, doc } from "@firebase/firestore";
import { createNote } from "../../api/notes"
import { db } from "../../firebase";

describe('Notes api tests', () => {
  const note = {
    title: 'Test title',
    body: 'Test body',
    date: new Date().getTime(),
  };
  const userId = 'test007';

  describe('createNote', () => {
    test('should return an id', async () => {
      try {
        const id = await createNote(userId, note);

        expect(typeof id).toBe('string');

        await deleteDoc(doc(db, `${userId}/journal/notes/${id}`));
      } catch (error) {
        console.log(error);
      }
    });
  })
  
})
