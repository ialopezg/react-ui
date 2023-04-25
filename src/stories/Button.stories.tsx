import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta = {
  title: "UI Kit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    variant: { control: "select", options: ["primary", "secondary"] },
    type: { control: "select", options: ["button", "reset", "submit"] }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (<Button variant="primary">Button</Button>),
  args: {
    variant: "primary",
    disabled: false,
    type: "button"
  },
};

export const Secondary: Story = {
  render: () => <Button>Button</Button>
};
