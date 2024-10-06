import { render } from '@testing-library/react';

import { TimePicker } from './timepicker';

describe('TimePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimePicker />);
    expect(baseElement).toBeTruthy();
  });
});
