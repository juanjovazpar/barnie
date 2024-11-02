import type { Meta } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Inputs/Select',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
    options: [
      { value: 'option1', label: 'Opción 1' },
      { value: 'option2', label: 'Opción 2' },
      { value: 'option3', label: 'Opción 3' },
    ],
  },
};
