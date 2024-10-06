import type { Meta } from '@storybook/react';
import { InputNumber } from './inputNumber';

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  title: 'Inputs/InputNumber',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
  },
};
