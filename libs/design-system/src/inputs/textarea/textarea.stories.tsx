import type { Meta } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Inputs/Textarea',
  argTypes: {
    disabled: { control: 'boolean' },
    filled: { control: 'boolean' },
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
    error: '',
    placeholder: 'This is a placeholder',
    disabled: false,
    filled: false,
    size: '',
    status: '',
  },
};
