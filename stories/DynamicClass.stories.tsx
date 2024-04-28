import type { Meta, StoryObj } from "@storybook/react";
import { DynamicClass } from "./DynamicClass.js";

const meta: Meta<typeof DynamicClass> = {
  component: DynamicClass,
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof DynamicClass>;

export const Default: Story = {
  args: {
    steps: [
      {
        id: "1",
        criteria: "A",
      },
      {
        id: "2",
        criteria: "B",
      },
      {
        id: "3",
        criteria: "C",
      },
      {
        id: "4",
        criteria: "N",
      },
      {
        id: "5",
        criteria: "",
      },
      {
        id: "6",
      },
    ]
  },
};
