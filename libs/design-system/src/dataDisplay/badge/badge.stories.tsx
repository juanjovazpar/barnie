import type { Meta } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Data Display/Badge',
};
export default meta;

export const Primary = {
  args: {
    label: 'Badge',
  },
};
