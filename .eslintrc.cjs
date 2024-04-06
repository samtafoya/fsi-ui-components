/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["eslint-comments", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "prefer-const": 2,
    "eslint-comments/no-unused-disable": 2,
    "no-console": 2,
    "no-restricted-syntax": 0,
    "react/jsx-no-literals": [0, { noStrings: true, ignoreProps: true }],
    "react/jsx-curly-spacing": 0,
    "react/self-closing-comp": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/function-component-definition": 0,
    "@typescript-eslint/consistent-type-imports": [
      2,
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-non-null-assertion": 2,
    "@typescript-eslint/no-empty-function": 2,
    "@typescript-eslint/no-unused-vars": 2,
  },
  ignorePatterns: [
    // Always ignore built/dist folders
    "lib/",
    "dist/",
    "out/",
    "build/",
    "storybook-static/",
    "coverage/",

    // Ignore eslint configuration files themselves
    ".eslintrc.cjs",

    // Ignore turborepo-generated files
    ".turbo/",
  ],
};
