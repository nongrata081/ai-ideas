import { render } from '@testing-library/react';

import About from './index.page';

describe('About', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<About />);
    expect(baseElement).toBeTruthy();
  });
});
