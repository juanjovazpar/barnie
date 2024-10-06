import type { Meta } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Inputs/Input',
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'input-xsmall', 'input-small', 'input-large'],
      defaultValue: 'default',
    },
    status: {
      control: {
        type: 'select',
      },
      options: ['default', 'correct', 'warning', 'error'],
      defaultValue: 'default',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    label: 'This is a label',
    error: 'Error',
    placeholder: 'This is a placeholder',
    disabled: false,
    size: '',
    status: '',
  },
};
