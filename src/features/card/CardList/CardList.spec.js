import CardList from './CardList';
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

test('<CardList/> renders a card-list', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CardList />
    </Provider>
  );
  expect(getByTestId('card-list')).toBeTruthy();
});

test('<CardList/> renders <Card/> for users', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CardList />
    </Provider>
  );

  expect(getByTestId('card-list')).toHaveTextContent('Larry0');
  expect(getByTestId('card-list')).toHaveTextContent('Larry1');
  expect(getByTestId('card-list')).toHaveTextContent('Larry2');
});
