import type { Meta } from '@storybook/react';
import { Progressbar } from './progressbar';

const meta: Meta<typeof Progressbar> = {
  component: Progressbar,
  title: 'Feedback/Progressbar',
  argTypes: {
    showValue: {
      control: {
        type: 'select',
      },
      options: ['none', 'inside', 'top', 'left'],
      defaultValue: '',
    },
    rounded: { control: 'boolean' },
    className: {
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
    size: {
      control: {
        type: 'select',
      },
      options: [
        'default',
        'progressbar-xsmall',
        'progressbar-small',
        'progressbar-large',
      ],
      defaultValue: 'default',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    label: 'Progressbar label',
    progress: 70,
    showValue: 'none',
    rounded: true,
    className: 'progressbar-primary',
    size: '',
  },
};
