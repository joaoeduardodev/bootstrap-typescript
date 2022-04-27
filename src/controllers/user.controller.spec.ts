
import { getAllUsers } from './user.controller';

describe('UserController', () => {
  describe('when getting all users', () => {
    let result: string;

    beforeEach(() => {
      result = getAllUsers();
    });

    it('should return the users', () => {
      expect(result).toBe('all users');
    });
  });
});