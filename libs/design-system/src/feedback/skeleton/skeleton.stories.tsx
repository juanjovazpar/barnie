import type { Meta } from '@storybook/react';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Feedback/Skeleton',
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: [
        'progressbar-primary',
        'progressbar-secondary',
        'progressbar-tertiary',
      ],
      defaultValue: 'progressbar-primary',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    type: 'progressbar-primary',
  },
};
