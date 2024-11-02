import type { Meta } from '@storybook/react';
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Feedback/Spinner',
  argTypes: {
    className: {
      control: {
        type: 'select',
      },
      options: [
        'spinner-xxsmall',
        'spinner-xsmall',
        'spinner-small',
        'spinner-medium',
        'spinner-large',
        'spinner-xlarge',
      ],
      defaultValue: 'spinner-medium',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    className: 'spinner-medium',
  },
};
