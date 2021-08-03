import usersReducer from './usersSlice';

const users = [
  {
    id: 0,
    name: 'Larry0 Howerton',
    firstName: 'Larry0',
    lastName: 'Howerton',
    email: 'lar123@gmail.com',
    address: '123 Cherry Lane',
    website: 'lars@gmail.com',
    company: 'Company A',
    companyPhrase: 'Best company around',
    companyInfo: ['Company A', 'Best company around'],
  },
  {
    id: 1,
    name: 'Larry1 Howerton',
    firstName: 'Larry1',
    lastName: 'Howerton',
    email: 'lar123@gmail.com',
    website: 'lars@gmail.com',
    company: 'Company A',
    companyPhrase: 'Best company around',
    companyInfo: ['Company A', 'Best company around'],
  },
  {
    id: 2,
    name: 'Larry2 Howerton',
    firstName: 'Larry2',
    lastName: 'Howerton',
    email: 'lar123@gmail.com',
    website: 'lars@gmail.com',
    company: 'Company A',
    companyPhrase: 'Best company around',
    companyInfo: ['Company A', 'Best company around'],
  },
];

test('usersReducer loads users', () => {
  const newState = usersReducer([], {
    type: 'users/usersLoaded',
    payload: users,
  });
  expect(newState).toHaveLength(3);
});

test('usersReducer adds a user', () => {
  const newUser = {
    firstName: 'Larry3',
    lastName: 'Howerton',
    email: 'lar123@gmail.com',
    website: 'lars@gmail.com',
    company: 'Company A',
    companyPhrase: 'Best company around',
    companyInfo: ['Company A', 'Best company around'],
  };
  const newState = usersReducer([], {
    type: 'users/userAdded',
    payload: newUser,
  });
  expect(newState).toHaveLength(1);
});

test('usersReducer edits a user', () => {
  const newUser = {
    firstName: 'Larry3',
    lastName: 'Howerton',
    email: 'lar123@gmail.com',
    website: 'lars@gmail.com',
    company: 'Company A',
    companyPhrase: 'Best company around',
    companyInfo: ['Company A', 'Best company around'],
  };
  const newState = usersReducer([newUser], {
    type: 'users/userEdited',
    payload: { editedField: 'lastName', newFieldValue: 'Jacobs' },
  });
  expect(newState[0].lastName).toBe('Jacobs');
});
