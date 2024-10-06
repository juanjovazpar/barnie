import type { Meta } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Inputs/Checkbox',
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
    disabled: false,
  },
};
