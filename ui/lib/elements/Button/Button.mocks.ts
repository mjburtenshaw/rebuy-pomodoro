import { StoryObj } from "@storybook/react";
import { Button } from "./Button.styled";

type Story = StoryObj<typeof Button>;

export const ButtonMocks: {
  [key: string]: Story;
} = {
  default: {},
};
