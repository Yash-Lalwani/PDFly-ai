import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:tailwindcss/recommended",
    ],
    plugins: ["prettier"], // Lets ESLint run Prettier and report formatting errors.
    rules: {
      "prettier/prettier": "error", // If Prettier finds formatting issues, ESLint marks them as errors.
      "react/no-escape-entities": "off", // Turns off the rule that complains about things like using ’ or ” directly in JSX.
    },
  }),
};

export default eslintConfig;
