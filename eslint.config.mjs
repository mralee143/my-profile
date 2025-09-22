import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules/**", ".next/**"],
  },
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
    },
    rules: {
      "@next/next/no-img-element": "off",         // allow <img>
      "react/no-unescaped-entities": "off",       // allow apostrophes
      "@typescript-eslint/no-explicit-any": "off" // allow any
    },
  },
];

