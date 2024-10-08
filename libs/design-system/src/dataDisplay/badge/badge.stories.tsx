import type { Meta } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Data Display/Badge',
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['square', 'pill'],
      defaultValue: 'square',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'xsmall', 'small', 'large'],
      defaultValue: 'default',
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['blue', 'red', 'orange', 'yellow', 'green', 'gray'],
      defaultValue: 'default',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    label: 'Badge',
    type: 'square',
    size: 'default',
    color: 'default',
  },
};
