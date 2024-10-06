import type { Meta } from '@storybook/react';
import { TimePicker } from './timepicker';

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  title: 'Inputs/TimePicker',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
  },
};
