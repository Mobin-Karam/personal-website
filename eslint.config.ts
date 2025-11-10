import type { Linter } from "eslint";

const config: Linter.Config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      typescript: { project: "./tsconfig.json" },
    },
  },
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        pathGroups: [
          { pattern: "@lib/**", group: "internal", position: "after" },
          { pattern: "@hooks/**", group: "internal", position: "after" },
          { pattern: "@components/**", group: "internal", position: "after" },
          { pattern: "@types/**", group: "internal", position: "after" },
          { pattern: "@context/**", group: "internal", position: "after" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "import/no-unresolved": "error",
  },
  ignorePatterns: [".next/", "node_modules/", "out/"],
};

export default config;
