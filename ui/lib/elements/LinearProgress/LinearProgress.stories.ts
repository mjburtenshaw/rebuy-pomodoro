import { LinearProgress } from './LinearProgress.styled';
import { LinearProgressMocks } from './LinearProgress.mocks';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof LinearProgress> = {
  component: LinearProgress,
  title: 'LinearProgress',
  args: {
    hookProps: {
      initial: 0,
      cap: 300,
      increment: 1,
      interval: 1000,
    },
    isCountdown: true,
  },
};

export default meta;

export const Default = LinearProgressMocks.default;
