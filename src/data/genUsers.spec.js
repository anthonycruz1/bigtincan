import { genUsers } from './genUsers';

test('genUsers generates an array of user objects', () => {
  const users = genUsers();
  expect(Array.isArray(users)).toBeTruthy();
  expect(users[0]).toHaveProperty('name');
  expect(users[0]).toHaveProperty('address');
  expect(users[0]).toHaveProperty('company');
});
