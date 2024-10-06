import { render } from '@testing-library/react';

import { RadioButton } from './radiobutton';

describe('RadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioButton />);
    expect(baseElement).toBeTruthy();
  });
});
