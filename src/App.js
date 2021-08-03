import React from 'react';
import CardList from './features/card/CardList/CardList';
import UserForm from './features/form/UserForm/UserForm';

function App() {
  return (
    <div className="App">
      <UserForm />
      <CardList />
    </div>
  );
}

export default App;
