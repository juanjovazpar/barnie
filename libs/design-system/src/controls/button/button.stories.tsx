import type { Meta } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Controls/Button',
};
export default meta;

export const Primary = {
  args: {
    label: 'Click me',
    onClick: () => alert('Clicked!'),
  },
};
