import type { Meta } from '@storybook/react';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Data Display/Tooltip',
  argTypes: {
    position: {
      control: {
        type: 'select',
      },
      options: ['bottom', 'right', 'top', 'left'],
      defaultValue: '',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    text: 'Click here for more information',
    position: 'bottom',
    children: (
      <button className="btn btn-primary" style={{ padding: '10px 20px' }}>
        Button with Tooltip
      </button>
    ),
  },
};
