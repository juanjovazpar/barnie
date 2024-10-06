import type { Meta } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Inputs/Input',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
  },
};
