import type { Meta } from '@storybook/react';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Data Display/Tooltip',
};
export default meta;

export const Primary = {
  args: {
    text: 'Click here for more information',
    position: 'bottom',
    children: (
      <button style={{ padding: '10px 20px' }}>Button with Tooltip</button>
    ),
  },
};
