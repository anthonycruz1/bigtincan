import FormField from './FormField';
import { render } from '@testing-library/react';

test('<FormField/> renders a form field with label and input HTML elements', () => {
  const { getByTestId } = render(<FormField label="test" />);
  expect(getByTestId('form-field')).toBeTruthy();
  expect(getByTestId('form-field')).toContainHTML('label');
  expect(getByTestId('form-field')).toContainHTML('input');
});
