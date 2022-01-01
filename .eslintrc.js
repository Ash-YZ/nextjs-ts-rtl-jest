module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint-config-airbnb',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/quotes': [2, 'single'],
    '@typescript-eslint/semi': [2, 'always'],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
  },
  env: {
    jest: true,
  },
};
