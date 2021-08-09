import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormField from '../FormField/FormField';

// Returns array of missing fields that are required. Add required fields to fields parameter
function returnMissingRequiredFields(
  form,
  fields = ['firstName', 'lastName', 'email']
) {
  // returns any required fields that are missing
  return form.filter((entry) => {
    const [key, value] = [entry[0], entry[1]];
    return value === '' && fields.includes(key);
  });
}

// Takes current formData from state and returns user
function createUserObject(form) {
  const newUser = {};
  form.forEach((entry) => {
    const [key, value] = [entry[0], entry[1]];
    newUser[key] = value;
  });
  newUser.name = newUser.firstName + ' ' + newUser.lastName;
  return newUser;
}

// Renders Form that creates new user
export default function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    company: '',
    companyPhrase: '',
    phone: '',
    website: '',
  });
  const [missingFields, setMissingFields] = useState([]);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newMissingFields = returnMissingRequiredFields(
      Object.entries(formData)
    );
    // if required fields are missing, don't create new user.
    if (newMissingFields.length > 0) {
      setMissingFields(newMissingFields);
      return;
    }

    // else, create user and dispatch new user to store
    const newUser = createUserObject(Object.entries(formData));
    setMissingFields([]);
    dispatch({
      type: 'users/userAdded',
      payload: {
        ...newUser,
        companyInfo: [newUser.company, newUser.companyPhrase],
      },
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      company: '',
      companyPhrase: '',
      phone: '',
      website: '',
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function expandUserForm() {
    const form = document.getElementById('user-form');
    form.style.height = 'auto';
  }

  function cancelAddUser(e) {
    e.preventDefault();
    const form = document.getElementById('user-form');
    form.style.height = '2em';
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      company: '',
      companyPhrase: '',
      phone: '',
      website: '',
    });
  }

  // If there are missing fields, notify user
  if (missingFields.length > 0) {
    return (
      <div data-testid="user-form" id="user-form" className="user-form">
        <div className="add-user__text" onClick={expandUserForm}>
          Add User
        </div>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((field, i) => {
            return (
              <FormField
                key={i}
                label={field}
                value={formData[field]}
                handleChange={handleChange}
              />
            );
          })}
          <button type="submit">Submit</button>
          <button onClick={cancelAddUser}>Close</button>
        </form>
        {missingFields.map((field, index) => {
          return <div key={index}>{field} must be filled</div>;
        })}
      </div>
    );
  }

  return (
    <div
      data-testid="user-form"
      id="user-form"
      className="user-form user-form--collapsed"
    >
      <div className="add-user__text" onClick={expandUserForm}>
        Add User
      </div>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field, i) => {
          return (
            <FormField
              key={i}
              label={field}
              value={formData[field]}
              handleChange={handleChange}
            />
          );
        })}
        <button type="submit">Submit</button>
        <button onClick={cancelAddUser}>Close</button>
      </form>
    </div>
  );
}
