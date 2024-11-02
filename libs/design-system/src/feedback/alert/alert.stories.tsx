import type { Meta } from '@storybook/react';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Feedback/Alert',
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['info', 'success', 'error', 'warning'],
      defaultValue: 'info',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    type: 'info',
    message: 'This is a message',
    description: 'This is a description',
    onClose: () => alert('Closed!'),
  },
};
