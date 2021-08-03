import UserForm from './UserForm';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

test('<UserForm/> renders a form', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
  expect(getByTestId('user-form')).toBeTruthy();
  expect(getByTestId('user-form')).toContainHTML('form');
});
