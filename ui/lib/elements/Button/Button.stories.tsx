import type { Meta } from "@storybook/react";
import { Button } from "./Button.styled";
import { ButtonMocks } from "./Button.mocks";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  args: {
    children: "TEST",
  },
};

export default meta;

export const Default = ButtonMocks.default;
