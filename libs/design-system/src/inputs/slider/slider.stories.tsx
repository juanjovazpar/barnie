import type { Meta } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Inputs/Slider',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
  },
};
