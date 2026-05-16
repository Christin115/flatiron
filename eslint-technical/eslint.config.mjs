import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-undef': 'error', // Ensure variables are defined
      'semi': ['error', 'always'],
      'curly': 'error',
      // Add more rules as needed
    }
  }
];