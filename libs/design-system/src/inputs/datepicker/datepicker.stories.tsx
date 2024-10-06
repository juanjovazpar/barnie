import type { Meta } from '@storybook/react';
import { DatePicker } from './datepicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Inputs/DatePicker',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
  },
};
