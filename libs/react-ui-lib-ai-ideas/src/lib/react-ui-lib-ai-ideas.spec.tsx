import { render } from '@testing-library/react';

import ReactUiLibAiIdeas from './react-ui-lib-ai-ideas';

describe('ReactUiLibAiIdeas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiLibAiIdeas />);
    expect(baseElement).toBeTruthy();
  });
});
