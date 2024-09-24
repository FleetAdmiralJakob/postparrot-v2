import baseConfig, { restrictEnvAccess } from "@postparrot/eslint-config/base";
import nextjsConfig from "@postparrot/eslint-config/nextjs";
import reactConfig from "@postparrot/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
