import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from "./Button";
import { Button } from "../button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    type: "default",
    children: "Button",
  },
};
export const Dashed: Story = {
  args: {
    type: "dashed",
    children: "Button",
  },
};
export const Text: Story = {
  args: {
    type: "text",
    children: "Button",
  },
};
export const Link: Story = {
  args: {
    type: "link",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
