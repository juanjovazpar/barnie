import { render } from '@testing-library/react';

import { Ping } from './ping';

describe('Ping', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ping />);
    expect(baseElement).toBeTruthy();
  });
});
