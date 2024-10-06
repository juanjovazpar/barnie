import type { Meta } from '@storybook/react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Inputs/Switch',
};
export default meta;

export const Primary = {
  args: {
    label: 'Label',
    error: 'Error',
    checked: true,
  },
};
