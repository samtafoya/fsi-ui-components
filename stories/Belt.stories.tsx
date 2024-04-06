import type { Meta, StoryObj } from "@storybook/react";
import { Belt } from "./Belt.js";

const meta: Meta<typeof Belt> = {
  component: Belt,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Belt>;

export const Default: Story = {
  args: {
    baseColor: "#ffffff",
    accentColor: "#000000",
  },
};

export const Striped: Story = {
  args: {
    type: "striped",
    baseColor: "#ffffff",
    accentColor: "#000000",
  },
};

export const Split: Story = {
  args: {
    type: "split",
    baseColor: "#ffffff",
    accentColor: "#000000",
  },
};
