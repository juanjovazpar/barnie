import type { Meta } from '@storybook/react';
import { RadioButton } from './radiobutton';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Inputs/RadioButton',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
  },
};
