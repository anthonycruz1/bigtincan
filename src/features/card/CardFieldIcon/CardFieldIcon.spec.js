import CardFieldIcon from './CardFieldIcon';
import { render } from '@testing-library/react';

test('<CardFieldIcon/> renders an SVG', () => {
  const { getByTestId } = render(<CardFieldIcon icon={'email'} />);
  expect(getByTestId('card-field-icon')).toContainHTML('svg');
});

test('<CardFieldIcon/> renders empty HTML when no props passed', () => {
  const { getByTestId } = render(<CardFieldIcon />);
  expect(getByTestId('card-field-icon')).not.toContainHTML('svg');
  expect(getByTestId('card-field-icon')).toContainHTML('div');
});
