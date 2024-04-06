import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

export default {
  stories: ["../src/**/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (viteConfig) =>
    mergeConfig(viteConfig, {
      build: {
        target: "es2022",
      },
    }),
} satisfies StorybookConfig;
