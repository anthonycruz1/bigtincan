export default function FormField(props) {
  let label = '';
  for (let i = 0; i < props.label.length; i++) {
    if (i === 0) {
      label += props.label[i].toUpperCase();
      continue;
    }
    if (props.label[i] === props.label[i].toUpperCase()) {
      label += ` ${props.label[i]}`;
      continue;
    }
    label += props.label[i];
  }

  return (
    <div data-testid="form-field">
      <label>
        {label}:
        <input
          name={props.label}
          value={props.value}
          onChange={props.handleChange}
          placeholder={`Add ${label}...`}
        />
      </label>
    </div>
  );
}
