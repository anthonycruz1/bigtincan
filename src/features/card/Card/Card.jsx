import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardField from '../CardField/CardField';
import displayedFields from '../displayedFields';

const Card = React.memo((props) => {
  const [editingField, setEditingField] = useState('');
  const dispatch = useDispatch();

  function handleEditing(e) {
    const editingField = e.target.getAttribute('data-field');
    setEditingField(editingField);
  }

  function cancelEdit() {
    setEditingField('');
  }

  function acceptEdit(e) {
    const editedField = e.target.getAttribute('data-field');
    const newValue = document
      .getElementById(`editing-${editedField}`)
      .value.trim();
    if (newValue === '') return;
    const userId = props.user.id;
    dispatch({
      type: 'users/userEdited',
      payload: {
        id: userId,
        editedField: editedField,
        newFieldValue: newValue,
      },
    });
    setEditingField('');
  }

  return (
    <div id={props.user.id} className="user-card" data-testid="user-card">
      <div className="user-card__header">
        <img
          className="user-card__image"
          src={props.user.image}
          alt={`${props.user.firstName[0].toUpperCase()} ${props.user.lastName[0].toUpperCase()}`}
        />
      </div>

      <div className="user-card__main">
        {displayedFields.map((field, index) => {
          let isEditing = field === editingField;
          return (
            <CardField
              handleEditing={handleEditing}
              isEditing={isEditing}
              acceptEdit={acceptEdit}
              cancelEdit={cancelEdit}
              key={index}
              value={[field, props.user[field]]}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Card;
