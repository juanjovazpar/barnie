import type { Meta } from '@storybook/react';
import { Timeline } from './timeline';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  title: 'Feedback/Timeline',
  argTypes: {
    hoverable: { control: 'boolean' },
  },
};
export default meta;

export const Primary = {
  args: {
    hoverable: false,
    slots: [
      {
        title: '1 AUG 2023',
        items: [
          {
            title: 'Created "Preline in React" task',
            description: 'Find more detailed insctructions here.',
            button: {
              title: 'James Collins',
              logo: 'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
            },
          },
          {
            title: 'Release v5.2.0 quick bug fix 🐞',
            button: {
              title: 'James Collins',
              logo: 'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
            },
          },
          {
            title: 'Marked "Install Charts" completed',
            description: 'Finally! You can check it out here.',
          },
        ],
      },
      {
        title: '11 JUL 2023',
        items: [
          {
            title: 'Take a break ⛳️',
            description: 'Just chill for now... 😉',
          },
        ],
      },
    ],
  },
};
