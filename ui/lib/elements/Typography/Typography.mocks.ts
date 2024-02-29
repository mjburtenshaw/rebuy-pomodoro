import { StoryObj } from '@storybook/react';
import { Typography } from './Typography.styled';

type Story = StoryObj<typeof Typography>;

export const TypographyMocks: {
  [key: string]: Story;
} = {
  default: {},
};
