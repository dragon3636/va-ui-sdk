module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prefer-const': ['error'],
    'no-new-object': ['error'],
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'quote-props': ['error', 'as-needed'],
    'no-empty-function': ['warn', { allow: ['arrowFunctions']}]
  },
};
