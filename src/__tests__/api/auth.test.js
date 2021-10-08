/**
 * @jest-environment node
 */
import { onCurrentUserChanged, signIn } from "../../api/auth";

describe('api/auth.js', () => {
  describe('onCurrentUserChanged', () => {
    test('should call onAuthStateChanged', async () => {
      const cb = jest.fn();
      await onCurrentUserChanged(cb);

      expect(cb).toHaveBeenCalled();
    });
  });
  
  describe('signIn', () => {
    test('should return user', async () => {
      const email = 'test@test.com';
      const password = '12345678';
      const user = await signIn({ email, password });

      expect(user).toEqual({
        name: null,
        userId: 'qknSNFJdkNfafMBOnzDsDQ3rJ0h1',
      });
    });
  });
  
  describe('signInWithGoogle', () => {
    test.skip('should return user', () => {
    });
  });
  
  describe('signOut', () => {
    test.skip('should call firebaseSignOut', () => {
    });
  });
  
  describe('signUpWithEmailAndPassword', () => {
    test.skip('should return user', () => {
    });
  });
});
