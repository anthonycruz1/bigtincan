import React from 'react';
import CardFieldIcon from '../CardFieldIcon/CardFieldIcon';

export default function CardField(props) {
  const [field, value] = [props.value[0], props.value[1]];
  if (props.isEditing)
    return (
      <div>
        <input
          autoFocus={true}
          id={`editing-${field}`}
          placeholder={value}
        ></input>
        <button onClick={props.cancelEdit}>Cancel</button>
        <button data-field={field} onClick={props.acceptEdit}>
          Accept
        </button>
      </div>
    );

  if (field === 'companyInfo') {
    return (
      <div
        data-testid="card-field"
        data-field={field}
        className={`card-field card-field__${field}`}
        onClick={props.handleEditing}
      >
        <CardFieldIcon icon={field} />
        <div data-field={field} className="companyInfo__container">
          <div className="companyName">{value[0]}</div>
          <div className="companyPhrase">
            <em>{value[1]}</em>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-testid="card-field"
      data-field={field}
      className={`card-field card-field__${field}`}
      onClick={props.handleEditing}
    >
      <CardFieldIcon icon={field} />
      {value}
    </div>
  );
}
