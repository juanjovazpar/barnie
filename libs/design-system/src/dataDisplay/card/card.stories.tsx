import type { Meta } from '@storybook/react';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Data Display/Card',
};
export default meta;

export const Primary = {
  args: {
    title: 'Card title',
  },
};
