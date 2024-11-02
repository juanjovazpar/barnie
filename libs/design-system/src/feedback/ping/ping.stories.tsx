import type { Meta } from '@storybook/react';
import { Ping } from './ping';

const meta: Meta<typeof Ping> = {
  component: Ping,
  title: 'Feedback/Ping',
  argTypes: {
    animated: { control: 'boolean' },
    className: {
      control: {
        type: 'select',
      },
      options: ['default', 'ping-primary', 'ping-secondary', 'ping-tertiary'],
      defaultValue: 'default',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    className: 'default',
    animated: true,
    label: '',
    children: (
      <button className="btn btn-primary" style={{ padding: '10px 20px' }}>
        Button with ping
      </button>
    ),
  },
};
