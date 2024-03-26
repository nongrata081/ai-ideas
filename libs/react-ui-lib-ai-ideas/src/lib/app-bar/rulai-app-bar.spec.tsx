import { render } from '@testing-library/react';

import RulaiAppBar from './rulai-app-bar';

describe('RulaiAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RulaiAppBar />);
    expect(baseElement).toBeTruthy();
  });
});
