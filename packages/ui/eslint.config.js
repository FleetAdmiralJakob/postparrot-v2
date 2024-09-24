import baseConfig from "@postparrot/eslint-config/base";
import reactConfig from "@postparrot/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
