import type { Meta, StoryObj } from '@storybook/react';
import { ReactUiLibAiIdeas } from './react-ui-lib-ai-ideas';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReactUiLibAiIdeas> = {
  component: ReactUiLibAiIdeas,
  title: 'ReactUiLibAiIdeas',
};
export default meta;
type Story = StoryObj<typeof ReactUiLibAiIdeas>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ReactUiLibAiIdeas!/gi)).toBeTruthy();
  },
};
