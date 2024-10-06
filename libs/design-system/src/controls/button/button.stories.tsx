import type { Meta } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Controls/Button',
  argTypes: {
    disabled: { control: 'boolean' },
    className: {
      control: {
        type: 'select',
      },
      options: ['btn-primary', 'btn-secondary', 'btn-tertiary'],
      defaultValue: 'btn-primary',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'btn-xsmall', 'btn-small', 'btn-large'],
      defaultValue: 'default',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    label: 'Click me',
    onClick: () => alert('Clicked!'),
    disabled: false,
    className: 'btn-primary',
    size: '',
  },
};
