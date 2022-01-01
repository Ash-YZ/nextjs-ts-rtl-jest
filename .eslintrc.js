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
    quotes: [2, 'single'],
    semi: [2, 'always'],
  },
  env: {
    jest: true,
  },
};
