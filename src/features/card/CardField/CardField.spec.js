import CardField from './CardField';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

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

store.dispatch({ type: 'users/usersLoaded', payload: users });

const [field, value] = ['name', users[0].name];

test('<CardField/> renders a card field component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CardField value={[field, value]} />
    </Provider>
  );
  expect(getByTestId('card-field')).toBeTruthy();
});

test('<CardField/> renders field', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CardField value={[field, value]} />
    </Provider>
  );

  expect(getByTestId('card-field')).toHaveTextContent('Larry0');
});
